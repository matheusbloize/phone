// CSS
import "./Calculator.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useRef, useState } from "react"

const Calculator = () => {
  const [view, setView] = useState("")
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [prop, setProp] = useState()
  const keysRef = useRef()
  const resultRef = useRef()

  const keyCliked = (e) => {
    if (e.className !== "calculator-app-keys") {
      if (e.innerText === "C") {
        setView("")
        setNum1()
        setNum2()
        setProp()
      }
      // if (e.innerText === "↵") {
      //   console.log("foi")
      //   let newNum1 = num1.toString().split("")
      //   let removeLastNumber = newNum1.pop()
      //   if ((num1 !== undefined && prop === undefined)) {
      //     setView(newNum1)
      //     setTimeout(() => {
      //       newNum1 = ""
      //       removeLastNumber = ""
      //     }, 1000)
      //   }
      // }
      if (num1 === undefined && e.getAttribute("calc-number") === "true") {
        setNum1(e.innerText)
        setView(e.innerText)
      }
      if (num1 !== undefined && e.getAttribute("calc-number") === "true" && prop === undefined) {
        setNum1(num1 + e.innerText)
        setView(num1 + e.innerText)
      }
      if (prop === undefined && e.getAttribute("calc-prop") === "true" && num1 !== undefined) {
        setProp(e.innerText)
        setView(e.innerText)
      }
      if (num1 !== undefined && prop !== undefined && num2 === undefined && e.getAttribute("calc-number") === "true") {
        setNum2(e.innerText)
        setView(e.innerText)
      }
      if (num2 !== undefined && e.getAttribute("calc-number") === "true" && prop !== undefined) {
        setNum2(num2 + e.innerText)
        setView(num2 + e.innerText)
      }
      if (num1 !== undefined && prop !== undefined && num2 !== undefined && e.innerText === "=") {
        switch (prop) {
          case "+":
            setView(parseFloat(num1) + parseFloat(num2))
            break
          case "-":
            setView(parseFloat(num1) - parseFloat(num2))
            break
          case "x":
            setView(parseFloat(num1) * parseFloat(num2))
            break
          case "/":
            setView(parseFloat(num1) / parseFloat(num2))
            break
          default:
            break
        }
      }
    }
  }

  return (
    <div className="app-main-page calculator-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>Calculator</h2>
      <div className="calculator-app">
        <div ref={resultRef} className="calculator-app-result">
          {view}
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