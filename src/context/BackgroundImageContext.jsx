import { createContext, useState, useEffect } from "react";

export const BackgroundImageContext = createContext()

export const BackgroundImageProvider = ({ children }) => {
  const [border, setBorder] = useState(1)

  const changeBorder = (bg) => {
    switch (bg) {
      case "1":
        setBorder(1)
        document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background1.jpg')`
        break
      case "2":
        setBorder(2)
        document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background2.jpg')`
        break
      case "3":
        setBorder(3)
        document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background3.jpg')`
        break
      default:
        break
    }
  }

  return (
    <BackgroundImageContext.Provider value={{ border, changeBorder }}>
      {children}
    </BackgroundImageContext.Provider>
  )
}