import { useEffect, useContext } from "react"
import { ModeContext } from "../context/ModeContext"

export const useColor = () => {
  const { mode } = useContext(ModeContext)
  
    useEffect(() => {
      if (mode === "dark") {
        document.querySelector(".phone-clock-app").style.color = "#333"
        document.querySelectorAll(".phone-items svg")[3].style.color = "#333"
        document.querySelectorAll(".phone-items svg")[4].style.color = "#333"
        document.querySelectorAll(".phone-items svg")[5].style.color = "#333"
      } else {
        document.querySelector(".phone-clock-app").style.color = "#FFFDD0"
        document.querySelectorAll(".phone-items svg")[3].style.color = "#FFFDD0"
        document.querySelectorAll(".phone-items svg")[4].style.color = "#FFFDD0"
        document.querySelectorAll(".phone-items svg")[5].style.color = "#FFFDD0"
      }
    }, [])
}