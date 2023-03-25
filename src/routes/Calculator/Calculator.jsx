// CSS
import "./Calculator.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"
import { useRef, useState } from "react"

const Calculator = () => {
  const [result, setResult] = useState()
  const keysRef = useRef()
  const resultRef = useRef()

  const keyCliked = (e) => {
    console.log(e.innerText)
    if(e.innerText !== "=") {
      setResult(e.innerText)
    }
    if (e.innerText === "↵") {
      console.log("Opa")
      setResult((prev) => prev - 1)
    }
    if(e.innerText === "C") {
      setResult("")
    } else if(result) {
      setResult(result + e.innerText)
    } 
    
  }

  return (
    <div className="app-main-page calculator-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>Calculator</h2>
      <div className="calculator-app">
        <div ref={resultRef} className="calculator-app-result">
          {result}
        </div>
        <div ref={keysRef} onClick={(e) => keyCliked(e.target)} className="calculator-app-keys">
          <div>
            <span>C</span>
          </div>
          <div>
            <span>&crarr;</span>
          </div>
          <div>
            <span>/</span>
          </div>
          <div>
            <span>x</span>
          </div>
          <div>
            <span>7</span>
          </div>
          <div>
            <span>8</span>
          </div>
          <div>
            <span>9</span>
          </div>
          <div>
            <span>-</span>
          </div>
          <div>
            <span>4</span>
          </div>
          <div>
            <span>5</span>
          </div>
          <div>
            <span>6</span>
          </div>
          <div>
            <span>+</span>
          </div>
          <div>
            <span>1</span>
          </div>
          <div>
            <span>2</span>
          </div>
          <div>
            <span>3</span>
          </div>
          <div className="grid-equal">
            <span className="span-border-right">=</span>
          </div>
          <div className="grid-zero">
            <span className="span-border-left">0</span>
          </div>
          {/* <div>
            <span>0</span>
          </div> */}
          <div>
            <span>,</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Calculator