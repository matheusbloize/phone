// CSS and Images
import "./Settings.css"
import bg1 from "../../assets/images/background1.jpg"
import bg2 from "../../assets/images/background2.jpg"
import bg3 from "../../assets/images/background3.jpg"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useEffect, useRef } from "react"
import { useContext } from "react"
import { ModeContext } from "../../context/ModeContext"
import { BackgroundImageContext } from "../../context/BackgroundImageContext"

const Settings = () => {
  const divBgRef = useRef()
  const settingsAppRef = useRef()

  const { changeMode, mode } = useContext(ModeContext)
  const { border, changeBorder } = useContext(BackgroundImageContext)

  useEffect(() => {
    setTimeout(() => {
      settingsAppRef.current.style.display = "block"
    }, 1000)
  }, [])

  useEffect(() => {
    changeMode(mode)
    for (let i = 0; i < 3; i++) {
      if (divBgRef.current.children[i].style.borderColor !== "") {
        mode === "dark" ? divBgRef.current.children[i].style.borderColor = "#fffdd0" : divBgRef.current.children[i].style.borderColor = "#222"
      }
    }
  }, [mode])

  useEffect(() => {
    changeBorder(border)
    mode === "light" ? divBgRef.current.children[border - 1].style.borderColor = "#222" : divBgRef.current.children[border - 1].style.borderColor = "#fffdd0"
  }, [border])

  const changeBackground = (e) => {
    if (e.style.borderColor === "") {
      for (let i = 0; i < 3; i++) {
        if (divBgRef.current.children[i].style.borderColor === "rgb(34, 34, 34)") {
          divBgRef.current.children[i].style.borderColor = ""
        } else {
          divBgRef.current.children[i].style.borderColor = ""
        }
      }
    } else {
      return
    }
    changeBorder(e.alt.split("")[e.alt.split("").length - 1])
  }

  const changeThemeMode = () => {
    if (document.body.style.backgroundColor === "" || document.body.style.backgroundColor === "rgb(255, 253, 208)") {
      changeMode("dark")
    } else {
      changeMode("light")
    }
  }

  return (
    <div className="app-main-page settings-container">
      <PhoneTop />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>Settings</h2>
      <div ref={settingsAppRef} className="settings-app">
        <div className="settings-app-bg">
          <p>Change Background:</p>
          <div ref={divBgRef} onClick={(e) => changeBackground(e.target)} className="background-options">
            <img src={bg1} alt="Background 1" />
            <img src={bg2} alt="Background 2" />
            <img src={bg3} alt="Background 3" />
          </div>
        </div>
        <div className="settings-app-mode">
          <p>Mode:</p>
          <div onClick={changeThemeMode} className="mode">
            <div className="dark"></div>
            <div className="ball"></div>
            <div className="light"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings