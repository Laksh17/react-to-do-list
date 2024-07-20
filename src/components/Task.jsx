const Task = ({index, taskName, bgColor, onTitleChange, onDelete}) => {
    return ( 
    <>
        <button className="float-right mt-2 mr-5" onClick={()=>onDelete(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#c21818]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
        <button className="float-right mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#329d32]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
        </button>
        <div className={`m-3 p-3 text-md rounded-md ${bgColor.secondary}`}>
            <input type="text" placeholder="New Task..." onChange={(e)=>{onTitleChange(e)}} className={`pl-3 text-xl font-medium border-none focus:outline-none placeholder:text-[#49495a] ${bgColor.secondary}`}/>    
        </div>
    </> );
}
 
export default Task;