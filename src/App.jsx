// CSS
import './App.css'

// Components
import SwiperFn from './components/SwiperFn'
import PhoneTop from './components/Phone/PhoneTop/PhoneTop'
import PhoneTopBar from './components/Phone/PhoneTopBar/PhoneTopBar'
import PhoneBottom from './components/Phone/PhoneBottom/PhoneBottom'

// Hooks
import { useNavigate, Outlet } from 'react-router-dom'
import { useRef, useEffect } from 'react'

function App() {
  const navigate = useNavigate()
  const buttonRef = useRef()

  const returnHome = () => {
    buttonRef.current.children[1].style.animation = "returnHome 1s ease-in"
    setTimeout(() => {
      buttonRef.current.children[1].style.display = "none"
    }, 950)
    setTimeout(() => {
      navigate("/")
      setTimeout(() => {
        buttonRef.current.children[1].style.animation = ""
      }, 500)
    }, 1000)
  }

  return (
    <div className="App">
      <div className="phone">
        <PhoneTopBar />
        <div ref={buttonRef} className="phone-inside-container">
          <PhoneTop />
          <Outlet />
          <SwiperFn />
          <PhoneBottom />
        </div>
        <div onClick={returnHome} draggable="false" className="return-button"></div>
      </div>
    </div>
  )
}

export default App
