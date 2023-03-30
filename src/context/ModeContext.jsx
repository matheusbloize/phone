import { createContext, useState } from "react";

export const ModeContext = createContext()

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("light")

  const changeMode = (color) => {
    if (color === "light") {
      setMode("light")
      document.body.style.backgroundColor = "#fffdd0"
      document.querySelector(".mode .ball").style.left = "5.8em"
      document.querySelector(".settings-container").style.backgroundColor = "#fffdd0"
      document.querySelector(".settings-container .phone-clock").style.color = "#333"
      document.querySelectorAll(".settings-container .phone-itens svg")[0].style.color = "#333"
      document.querySelectorAll(".settings-container .phone-itens svg")[1].style.color = "#333"
      document.querySelectorAll(".settings-container .phone-itens svg")[2].style.color = "#333"
      document.querySelector(".settings-app").style.color = "#333"
      document.querySelector(".settings-container h2").style.color = "#333"
      document.querySelector("svg").style.color = "#fffdd0"
      document.querySelector(".camera p").style.color = "#fffdd0"
      document.querySelector(".clock p").style.color = "#fffdd0"
      document.querySelector(".calculator p").style.color = "#fffdd0"
      document.querySelector(".settings p").style.color = "#fffdd0"
      document.querySelector(".todo p").style.color = "#fffdd0"
      document.querySelector(".weather p").style.color = "#fffdd0"
      document.querySelector(".tictactoe p").style.color = "#fffdd0"
      document.querySelector(".memory p").style.color = "#fffdd0"
      document.querySelector(".camera p").style.textShadow = "2px 2px 0px #000"
      document.querySelector(".clock p").style.textShadow = "2px 2px 0px #000"
      document.querySelector(".calculator p").style.textShadow = "2px 2px 0px #000"
      document.querySelector(".settings p").style.textShadow = "2px 2px 0px #000"
      document.querySelector(".todo p").style.textShadow = "2px 2px 0px #000"
      document.querySelector(".weather p").style.textShadow = "2px 2px 0px #000"
      document.querySelector(".tictactoe p").style.textShadow = "2px 2px 0px #000"
      document.querySelector(".memory p").style.textShadow = "2px 2px 0px #000"
      document.querySelectorAll(".phone-itens svg")[0].style.color = "#fffdd0"
      document.querySelectorAll(".phone-itens svg")[1].style.color = "#fffdd0"
      document.querySelectorAll(".phone-itens svg")[2].style.color = "#fffdd0"
      document.querySelector(".phone-clock").style.color = "#fffdd0"
    } else if (color === "dark") {
      setMode("dark")
      document.body.style.backgroundColor = "#353535"
      document.querySelector(".mode .ball").style.left = ".7em"
      document.querySelector(".settings-container").style.backgroundColor = "#222"
      document.querySelector(".settings-container .phone-clock").style.color = "#fffdd0"
      document.querySelectorAll(".settings-container .phone-itens svg")[0].style.color = "#fffdd0"
      document.querySelectorAll(".settings-container .phone-itens svg")[1].style.color = "#fffdd0"
      document.querySelectorAll(".settings-container .phone-itens svg")[2].style.color = "#fffdd0"
      document.querySelector(".settings-app").style.color = "#fffdd0"
      document.querySelector(".settings-container h2").style.color = "#fffdd0"
      document.querySelector("svg").style.color = "#333"
      document.querySelector(".camera p").style.color = "#333"
      document.querySelector(".clock p").style.color = "#333"
      document.querySelector(".calculator p").style.color = "#333"
      document.querySelector(".settings p").style.color = "#333"
      document.querySelector(".todo p").style.color = "#333"
      document.querySelector(".weather p").style.color = "#333"
      document.querySelector(".tictactoe p").style.color = "#333"
      document.querySelector(".memory p").style.color = "#333"
      document.querySelector(".camera p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelector(".clock p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelector(".calculator p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelector(".settings p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelector(".todo p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelector(".weather p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelector(".tictactoe p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelector(".memory p").style.textShadow = "2px 2px 0px #8c8c8c"
      document.querySelectorAll(".phone-itens svg")[0].style.color = "#333"
      document.querySelectorAll(".phone-itens svg")[1].style.color = "#333"
      document.querySelectorAll(".phone-itens svg")[2].style.color = "#333"
      document.querySelector(".phone-clock").style.color = "#333"
    }
  }

  return (
    <ModeContext.Provider value={{ mode, setMode, changeMode }}>
      {children}
    </ModeContext.Provider>
  )
}