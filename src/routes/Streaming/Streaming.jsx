// CSS
import "./Streaming.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useColor } from "../../hooks/useColor"

const Streaming = () => {
  useColor()

  return (
    <div className="app-main-page streaming-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <div className="streaming-app">
        <iframe src="https://matheusbloize.github.io/streaming/" frameBorder="0"></iframe>
      </div>
    </div>
  )
}

export default Streaming