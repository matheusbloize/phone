// CSS
import "./Clock.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks


const Clock = () => {
  return (
    <div className="app-main-page clock-container">
      <PhoneTop />
      <PhoneTopBar addClass="phone-top-bar-app"/>
    </div>
  )
}

export default Clock