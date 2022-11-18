document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementsByTagName('form').addEventListener('submit',(e)=>{
     e.preventDefault()
     const placeholder = document.querySelector('#new-task-description')

     addToDo(placeholder.value)
  })
      const addToDo = (item)=>{
      const item = document.createElement('p')
          document.querySelector('#tasks').appendChild(p)
      }
}
)
