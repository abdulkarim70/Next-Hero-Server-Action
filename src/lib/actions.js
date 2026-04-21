export const creatATask=async(formData)=>{
'use server'
const name=formData.get('name')
console.log('adding a task', formData);
}