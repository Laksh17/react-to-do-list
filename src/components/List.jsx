import ToDo from "./ToDo";
import Task from "./Task";
import { useState } from "react";

const List = () => {
    const [title, setTitle] = useState("Add a title...");
    const [toDoList, setToDoList] = useState([]);

    const handleTitleChange = (title) => {
        console.log(title);
        setTitle(title);
    }

    const addToDo = (key,bgColor)=>{
        setToDoList(toDoList.concat(<ToDo key={key} bgColor={bgColor} onTitleChange={handleTitleChange}/>))
    }

    const redColor = {
        primary: "bg-red-600",
        secondary: "bg-red-300"
    };
    const amberColor = {
        primary: "bg-amber-600",
        secondary: "bg-amber-300"
    };
    const tealColor = {
        primary: "bg-teal-600",
        secondary: "bg-teal-300"
    };

    const colors = [redColor, amberColor, tealColor];

    return ( 
        <>
            <div className="p-3 text-3xl font-medium color bg-[#bdcfd8] inline-block rounded-md">
                Laksh's Lists
            </div>
            <button className="mt-0.5 mr-5 ml-2" onClick={()=>{addToDo(`${toDoList.length}`,colors[(Math.floor(Math.random() * colors.length))])}}>
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </button>
            <div className="mt-2 mb-2 rounded-md grid grid-cols-3 auto-cols-min gap-3 items-start">
                {toDoList}
            </div>
        </>
    );
}
 
export default List;