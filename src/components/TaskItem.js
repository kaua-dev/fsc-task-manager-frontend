import { useEffect } from "react";

const TaskItem = ({ task }) => {
    useEffect(() => {
        console.log("component was mounted!");

        return () => {
            console.log("i will unmount");
        };
    }, []);

    return (
        <>
            <h1>{task.descrition}</h1>
            <p>{task.isCompleted ? "Completa" : "Não Completa"}</p>
        </>
    );
};

export default TaskItem;
