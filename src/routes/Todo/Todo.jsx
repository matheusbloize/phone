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
  const [tasks] = useState([])
  const [render, setRender] = useState(0)
  const formRef = useRef()

  useColor()

  // console.log(inputTask)
  // console.log(tasks)

  useEffect(() => {
    formRef.current.children[0].value = ""
    formRef.current.children[0].focus()
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
    console.log(e.parentElement.parentElement.id)
    if (e.parentElement.parentElement.id !== "") {
      e.parentElement.parentElement.parentElement.removeChild(e.parentElement.parentElement)
    } else {
      return
    }
  }

  const editTask = (e) => {
    if (e.parentElement.parentElement.id !== "") {
      console.log("1")

      // e.parentElement.parentElement.querySelector(".todo-task-name").innerText = newInputTask
    } else {
      console.log("2")

      // e.parentElement.parentElement.parentElement.querySelector(".todo-task-name").innerText = newInputTask
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
          {tasks.length > 0 ? (
            (tasks.map((task) => (
              <div key={task[1]} id={task[1]} className="todo-task">
                <div className="todo-task-name">{task[0]}</div>
                <input
                  type="text"
                  placeholder="Edit a task"
                  value={newInputTask}
                  onChange={(e) => setNewInputTask(e.target.value)}
                />
                <BiCheck onClick={(e) => confirmEdit(e.target)} className="todo-task-check"/>
                <div className="todo-task-delete">
                  <BiTrash onClick={(e) => deleteTask(e.target)} />
                </div>
                <div className="todo-task-edit">
                  <BiEdit onClick={(e) => editTask(e.target)} />
                </div>
              </div>
            )))
          ) : (
            <p style={{ color: "#fff", marginTop: "2em" }}>No tasks yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo