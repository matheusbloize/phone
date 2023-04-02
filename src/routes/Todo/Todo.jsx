// CSS
import "./Todo.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"
import { BiTrash, BiEdit, BiCheck } from "react-icons/bi"

// Hooks
import { useColor } from "../../hooks/useColor"
import { useEffect, useRef, useState } from "react"

const Todo = () => {
  const [inputTask, setInputTask] = useState("")
  const [newInputTask, setNewInputTask] = useState("")
  let [tasks] = useState([])
  const [render, setRender] = useState(0)
  const formRef = useRef()

  useColor()

  useEffect(() => {
    setInputTask("")
    setNewInputTask("")
    formRef.current.children[0].value = ""
    formRef.current.children[0].focus()
    const noTasks = document.createElement("p")
    noTasks.innerText = "No tasks yet."
    noTasks.style.color = "#fff"
    noTasks.style.marginTop = "2em"
    noTasks.classList.add("no-tasks")
    if (tasks.length === 0) {
      document.querySelector(".todo-app").appendChild(noTasks)
    } else if (tasks.length > 0 && document.querySelector(".no-tasks")) {
      document.querySelector(".no-tasks").parentElement.removeChild(document.querySelector(".no-tasks"))
    }
  }, [render])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputTask === "") {
      return
    } else {
      if (inputTask.length > 18) {
        document.querySelector(".todo-error").style.display = "block"
        formRef.current.children[0].value = ""
        formRef.current.children[0].focus()
        setTimeout(() => {
          document.querySelector(".todo-error").style.display = "none"
        }, 2500)
      } else {
        tasks.push([inputTask, Math.floor(Math.random() * 1000)])
        setRender(render + 1)
      }
    }
  }

  const deleteTask = (e) => {
    for (let i = 0; i < tasks.length; i++) {
      if (e.parentElement.id == tasks[i][1]) {
        tasks.splice(i, 1)
      }
    }
    setRender(render + 1)
  }

  const editTask = (e) => {
    const id = e.parentElement.id
    for (let i = 0; i < document.querySelector(".todo-tasks").children.length; i++) {
      if (document.querySelector(".todo-tasks").children[i].id === id) {
        document.querySelectorAll(".todo-task input")[i].style.display = "flex"
        document.querySelectorAll(".todo-task .todo-task-check")[i].style.display = "flex"
      }
    }
  }

  const confirmChanges = (e) => {
    const id = e.parentElement.id
    if (document.querySelector(".todo-task input").value === "") {
      return
    } else if (newInputTask.length > 18) {
      document.querySelector(".todo-error").style.display = "block"
      formRef.current.children[0].value = ""
      formRef.current.children[0].focus()
      setTimeout(() => {
        document.querySelector(".todo-error").style.display = "none"
      }, 2500)
      return
    } else {
      for (let i = 0; i < document.querySelector(".todo-tasks").children.length; i++) {
        if (document.querySelector(".todo-tasks").children[i].id === id) {
          tasks[i][0] = newInputTask
          setRender(render + 1)
          document.querySelectorAll(".todo-task input")[i].style.display = "none"
          document.querySelectorAll(".todo-task .todo-task-check")[i].style.display = "none"
        }
      }
    }
  }

  return (
    <div className="app-main-page todo-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>To Do</h2>
      <div className="todo-app">
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
        <div className="todo-error">
          <p>Only 18 characters on the task area.</p>
        </div>
        <div className="todo-tasks">
          {tasks.length > 0 && (
            (tasks.map((task) => (
              <div key={task[1]} id={task[1]} className="todo-task">
                <div className="todo-task-name">{task[0]}</div>
                <input
                  type="text"
                  placeholder="Edit a task"
                  value={newInputTask}
                  onChange={(e) => setNewInputTask(e.target.value)}
                />
                <div onClick={(e) => confirmChanges(e.target)} className="todo-task-check">
                  <BiCheck pointerEvents="none" />
                </div>
                <div onClick={(e) => deleteTask(e.target)} className="todo-task-delete">
                  <BiTrash pointerEvents="none" />
                </div>
                <div onClick={(e) => editTask(e.target)} className="todo-task-edit">
                  <BiEdit pointerEvents="none" />
                </div>
              </div>
            )))
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo