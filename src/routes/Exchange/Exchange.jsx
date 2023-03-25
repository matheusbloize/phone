// CSS
import "./Exchange.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

const Exchange = () => {
  return (
    <div className="app-main-page exchange-container">
      <PhoneTop />
      <PhoneTopBar addClass="phone-top-bar-app"/>
    </div>
  )
}

export default Exchange