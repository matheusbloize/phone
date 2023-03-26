// CSS
import "./Calculator.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"
import { useRef, useState } from "react"

const Calculator = () => {
  const [result, setResult] = useState()
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const keysRef = useRef()
  const resultRef = useRef()

  const keyCliked = (e) => {
    if(e.getAttribute("calc-number") === "true" && num1 == undefined) {
      setNum1(parseFloat(e.innerText))
      console.log(num1)
      setResult(e.innerText)
    }
    if(e.getAttribute("calc-prop") === "true") {
      console.log(num1, e)
    }
    if(e.getAttribute("calc-number") === "true" && num1 !== undefined) {
      console.log(num2)
      setNum2(parseFloat(e.innerText))
      setResult(e.innerText)
    }
    if (e.innerText === "=") {
      setResult("")
      console.log(num1)
      console.log(num2)
      console.log(typeof num1)
      console.log(typeof num2)
      setResult(num1 + num2)
      console.log(result)
    }
    // if(e.getAttribute("calc-number") !== null) {
    //   if(num1 === undefined) {
    //     setNum1(e)
    //   }
    //   if()
    // }
    // console.log(e.getAttribute("calc-number"))
    
    if (e.innerText === "C") {
      setNum1()
      setNum2()
      setResult("")
    } else if (result) {
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
          <div>C</div>
          <div>&crarr;</div>
          <div calc-prop="true">/</div>
          <div calc-prop="true">x</div>
          <div calc-number="true">7</div>
          <div calc-number="true">8</div>
          <div calc-number="true">9</div>
          <div calc-prop="true">-</div>
          <div calc-number="true">4</div>
          <div calc-number="true">5</div>
          <div calc-number="true">6</div>
          <div calc-prop="true">+</div>
          <div calc-number="true">1</div>
          <div calc-number="true">2</div>
          <div calc-number="true">3</div>
          <div className="grid-equal span-border-right">=</div>
          <div calc-number="true" className="grid-zero span-border-left">0</div>
          <div>,</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator