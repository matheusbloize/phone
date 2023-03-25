// CSS
import "./Settings.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

const Settings = () => {
  return (
    <div className="app-main-page settings-container">
      <PhoneTop />
      <PhoneTopBar addClass="phone-top-bar-app"/>
    </div>
  )
}

export default Settings