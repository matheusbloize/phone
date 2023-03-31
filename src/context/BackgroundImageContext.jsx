import { createContext, useState, useEffect } from "react";

export const BackgroundImageContext = createContext()

export const BackgroundImageProvider = ({ children }) => {
  const [border, setBorder] = useState(1)

  const changeBorder = (bg) => {
    switch (bg) {
      case "1":
        setBorder(1)
        if(location.hostname === "localhost") {
          document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background1.jpg')`
        } else {
          document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background1-04c80947.jpg')`
        }
        break
      case "2":
        setBorder(2)
        if(location.hostname === "localhost") {
          document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background2.jpg')`
        } else {
          document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background2-63904891.jpg')`
        }
        break
      case "3":
        setBorder(3)
        if(location.hostname === "localhost") {
          document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background3.jpg')`
        } else {
          document.querySelector(".phone-inside-container").style.backgroundImage = `url('../src/assets/images/background3-96b3052d.jpg')`
        }
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