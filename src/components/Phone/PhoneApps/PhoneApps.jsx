// CSS and Images
import "./PhoneApps.css"
import weather from "../../../assets/images/weather.png"
import calculator from "../../../assets/images/calculator.png"
import camera from "../../../assets/images/camera.png"
import clock from "../../../assets/images/clock.png"
import exchange from "../../../assets/images/exchange.png"
import settings from "../../../assets/images/settings.png"
import todo from "../../../assets/images/todo.png"

// Components
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

const PhoneApps = () => {
  const navigate = useNavigate()
  const phoneRef = useRef()

  const slowNavigate = (app) => {
    console.log(app)
    if(app.src !== undefined) {
      const newPathName = app.src.split("/")[app.src.split("/").length - 1]
      phoneRef.current.style.animation = "appClicked 2s ease"
      setTimeout(() => {
        phoneRef.current.style.display = "none"
      }, 1900)
      setTimeout(() => {
        console.log(newPathName)
        console.log(`/${newPathName.split(".png").join("")}`)
        navigate(`/${newPathName.split(".png").join("")}`)
        console.log(phoneRef.current)
        console.log(phoneRef.current.style)
        if(phoneRef.current !== "null") {
          setTimeout(() => {
            phoneRef.current.style.display = "flex"
            phoneRef.current.style.animation = ""
            
          }, 500)
        }
      }, 2000)
    }
  }
  // buttonRef.current.children[1].style.animation = "returnHome 1s ease-in"
  //   setTimeout(() => {
  //     buttonRef.current.children[1].style.display = "none"
  //   }, 950)
  //   setTimeout(() => {
  //     navigate("/")
  //     setTimeout(() => {
  //       buttonRef.current.children[1].style.animation = ""
  //     }, 500)
  //   }, 1000)

  return (
    <>
      <div ref={phoneRef} className="phone-inside-center">
        <div className="apps-left">
          <div onClick={(e) => slowNavigate(e.target)} to="/weather" className="weather">
            <div className="app">
              <img src={weather} alt="Weather App" />
            </div>
            <p>Weather</p>
          </div>
          <div onClick={(e) => slowNavigate(e.target)} to="/todo" className="todo">
            <div className="app">
              <img src={todo} alt="To Do App" />
            </div>
            <p>To Do</p>
          </div>
          <div onClick={(e) => slowNavigate(e.target)} to="/exchange" className="exchange">
            <div className="app">
              <img src={exchange} alt="Exchange App" />
            </div>
            <p>Exchange</p>
          </div>
          <div onClick={(e) => slowNavigate(e.target)} to="/animals" className="camera">
            <div className="app">
              <img src={camera} alt="Animals App" />
            </div>
            <p>Animals</p>
          </div>
        </div>
        <div className="apps-right">
          <div onClick={(e) => slowNavigate(e.target)} to="/camera" className="camera">
            <div className="app">
              <img src={camera} alt="Camera App" />
            </div>
            <p>Camera</p>
          </div>
          <div onClick={(e) => slowNavigate(e.target)} to="/calculator" className="calculator">
            <div className="app">
              <img src={calculator} alt="Calculator App" />
            </div>
            <p>Calculator</p>
          </div>
          <div onClick={(e) => slowNavigate(e.target)} to="/settings" className="settings">
            <div className="app">
              <img src={settings} alt="Settings App" />
            </div>
            <p>Settings</p>
          </div>
          <div onClick={(e) => slowNavigate(e.target)} to="/clock" className="clock">
            <div className="app">
              <img src={clock} alt="Clock App" />
            </div>
            <p>Clock</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneApps