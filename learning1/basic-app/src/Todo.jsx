import { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState([]);
    const [value, setValue] = useState("");

    const changeTask = (event) => {
        setValue(event.target.value);
    }

    const deleteItem = (id) => {
        setTask(task.filter((_, index) => index !== id));
    }

    const addTask = () => {
        if (value.trim() !== "") {  // Prevent adding empty tasks
            setTask([...task, value]);
            setValue("");
        }
    }

    return (
        <>
            <div>
                <input placeholder="Add task" onChange={changeTask} value={value} />
                <button onClick={addTask}>Add task</button>
            </div>
            <div>
                <ul>
                    {task.map((item, ind) => (
                        <li className="flex" key={ind}>
                            {item}
                            <button className="p-3" onClick={() => deleteItem(ind)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TodoList;
