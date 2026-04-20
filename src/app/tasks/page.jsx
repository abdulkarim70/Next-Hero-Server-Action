import AddTasks from "@/components/AddTasks";
import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/tasks";

const TasksPage = async() => {
    const tasks= await getTasks()
    return (
        <div>
           <h2>Task:{tasks.length} </h2>
           <AddTasks></AddTasks>
           <div className="grid grid-cols-3 gap-3 pt-8 ">
            { 
                tasks.map(task=> <TaskCard task={task} key={task.id}></TaskCard>)
            }
            </div> 
        </div>
    );
};

export default TasksPage;