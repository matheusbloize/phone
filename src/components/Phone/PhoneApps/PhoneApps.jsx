// CSS and Images
import "./PhoneApps.css"
import weather from "../../../assets/images/weather.png"
import calculator from "../../../assets/images/calculator.png"
import camera from "../../../assets/images/camera.png"
import streaming from "../../../assets/images/streaming.png"
import memory from "../../../assets/images/memory.png"
import settings from "../../../assets/images/settings.png"
import todo from "../../../assets/images/todo.png"
import tictactoe from "../../../assets/images/tictactoe.png"

// Components
import { useNavigate } from "react-router-dom"
import { useRef, useEffect } from "react"

const PhoneApps = () => {
  const navigate = useNavigate()
  const phoneRef = useRef()

  const slowNavigate = (app) => {
    if(app.tagName === "DIV") {
      app = app.children[0]
    }
    document.querySelector(".return-button").style.display = "none"
    if(app.src !== undefined) {
      let newPathName
      if(location.hostname === "localhost") {
        newPathName = app.src.split("/")[app.src.split("/").length - 1]
      } else {
        newPathName = app.src.split(".png").toString().split("/")[app.src.split(".png").toString().split("/").length - 1].split("-")[0]
      }
      phoneRef.current.style.animation = "appClicked 2s ease"
      setTimeout(() => {
        phoneRef.current.style.display = "none"
      }, 1900)
      setTimeout(() => {
        navigate(`/${newPathName.split(".png").join("")}`)
        document.querySelector(".return-button").style.display = "block"
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

  // useEffect(() => {
  //   const testeMassa = (document.querySelector(".swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal"))
  //   if(testeMassa.children[0].classList.contains("swiper-pagination-bullet-active")) {
  //     document.body.children[0].children[0].children[0].children[1].style.backgroundPosition = "0%"
  //   } else if (testeMassa.children[1].classList.contains("swiper-pagination-bullet-active")) {
  //     document.body.children[0].children[0].children[0].children[1].style.backgroundPosition = "50%"
  //   } else if (testeMassa.children[2].classList.contains("swiper-pagination-bullet-active")) {
  //     document.body.children[0].children[0].children[0].children[1].style.backgroundPosition = "100%"
  //   }
  // }, )

  return (
    <>
      <div ref={phoneRef} background-id="1" className="phone-inside-center">
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
          <div onClick={(e) => slowNavigate(e.target)} to="/memory" className="memory">
            <div className="app">
              <img src={memory} alt="Memory App" />
            </div>
            <p>Memory</p>
          </div>
          <div onClick={(e) => slowNavigate(e.target)} to="/tictactoe" className="tictactoe">
            <div className="app">
              <img src={tictactoe} alt="Tic Tac Toe App" />
            </div>
            <p>Tic Tac Toe</p>
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
          <div onClick={(e) => slowNavigate(e.target)} to="/streaming" className="streaming">
            <div className="app">
              <img src={streaming} alt="Streaming App" style={{borderRadius: ".5em"}} />
            </div>
            <p>Streaming</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneApps