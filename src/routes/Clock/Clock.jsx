// CSS
import "./Clock.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useColor } from "../../hooks/useColor"

const Clock = () => {
  useColor()

  return (
    <div className="app-main-page clock-container">
      <PhoneTop addClass="phone-clock-app"/>
      <PhoneTopBar addClass="phone-top-bar-app"/>
    </div>
  )
}

export default Clock