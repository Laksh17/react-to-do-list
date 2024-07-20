import { useState } from "react";
import Task from "./Task";

let idGen = 0;
const ToDo = ({key, bgColor, onTitleChange}) => {
    let [taskDetails, setTaskDetails] = useState([]);
    const [taskTitle, setTaskTitle] = useState("New Task...");
    
    const deleteTask = (index)=>{
        setTaskDetails(taskDetails.filter((task)=> task.id != index))
        console.log(index)
        console.log(taskDetails)
    }

    const addTask = () =>{
        idGen += 1;
        setTaskDetails([...taskDetails,{
            id: idGen,
            title: taskTitle
        }]);
        console.log(taskDetails);
    }

    const handleTaskTitleChange = (taskTitle) => {
        setTaskTitle(taskTitle);
    }
    
    const generateTasks = ( ) =>{
        let tasks = [];
        for (let i = 0; i < taskDetails.length; i++){
            tasks.push(<Task key={taskDetails[i].id} index={taskDetails[i].id} taskName={taskDetails[i].title} bgColor={bgColor} onTitleChange={handleTaskTitleChange} onDelete={deleteTask}/>)
        }
        return tasks;
    }

    const tasksId = "list-" + key;
    return ( 
        <>
            <div key={key} id={key} className={`p-3 rounded-md ${bgColor.primary}`}>
                <input type="text" placeholder="Add a title..." onChange={(e)=>{onTitleChange(e)}} className={`pl-3 text-xl font-medium placeholder:text-[#ececf1] text-white border-none focus:outline-none ${bgColor.primary}`}/>
                
                <button className="float-right mt-0.5 mr-5" onClick={()=>{addTask()}}>
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                
                </button>
                <ul id={tasksId}>
                    {generateTasks()}
                </ul>
            </div>
                {/* <h2 className="p-3 bg-[#4bccec] text-lg font-normal rounded-md">
                    Daily
                </h2>
                <h2 className="p-3 bg-[#71ec4b] text-lg font-normal rounded-md">
                    Take-your-time
                </h2> */}
        </>
    );
}   
 
export default ToDo;