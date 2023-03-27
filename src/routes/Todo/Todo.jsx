// CSS
import "./Todo.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks


const Todo = () => {
  return (
    <div className="app-main-page todo-container">
      <PhoneTop />
      <PhoneTopBar addClass="phone-top-bar-app"/>
    </div>
  )
}

export default Todo