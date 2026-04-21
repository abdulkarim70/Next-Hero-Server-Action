import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const creatATask=async(formData)=>{
'use server'
// const name=formData.get('name')
// const title=formData.get('title')
// const description =formData.get('description')
// const priority =formData.get('priority')
// const status =formData.get('status')
// const assignTo =formData.get('assignTo')
// const newTask={
//     title, description, priority, status, assignTo
// }
const newTask=Object.fromEntries(formData.entries())
console.log('adding a task', newTask);
const res= await postTask(newTask)
if(res.ok){
    revalidatePath('/tasks')
}
return res
}