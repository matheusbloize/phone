// CSS
import "./Calculator.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useEffect, useRef, useState } from "react"
import { useColor } from "../../hooks/useColor"

const Calculator = () => {
  const [view, setView] = useState("")
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [prop, setProp] = useState()
  const keysRef = useRef()
  const resultRef = useRef()
  const equalRef = useRef()

  let regex = new RegExp(/[0-9]$/)

  useColor()

  useEffect(() => {
    if (num1 !== undefined) {
      if (isNaN(num1)) {
        setView("0")
        setNum1("0")
        setNum2()
        setProp()
        return
      }
    }
    if (view.length >= 18) {
      alert("You've reached the maximum number of characters.")
      setView("0")
      setNum1("0")
      setNum2()
      setProp()
      return
    }
  }, [view])

  const keyCliked = (e) => {
    if (e.className !== "calculator-app-keys") {
      if (e.innerText === "C") {
        resultRef.current.style.animation = ""
        setView("")
        setNum1()
        setNum2()
        setProp()
      }
      if (e.getAttribute("calc-number") === "true") {
        if (num1 == undefined) {
          setNum1(e.innerText)
          setView(e.innerText)
        }
        if (num1 !== undefined && prop == undefined) {
          setNum1(num1 + e.innerText)
          setView(num1 + e.innerText)
        } else if (num1 !== undefined && prop !== undefined) {
          resultRef.current.style.animation = ""
          setNum2(e.innerText)
          setView(num1 + prop + e.innerText)
          if (num2 !== undefined) {
            setNum2(num2 + e.innerText)
            setView((num1) + prop + (num2 + e.innerText))
          }
        }
      }
      if (e.getAttribute("calc-prop") === "true") {
        if (num1 !== undefined && prop !== undefined && num2 !== undefined) {
          switch (prop) {
            case "+":
              setNum1(parseFloat(num1) + parseFloat(num2))
              resultRef.current.style.animation = "blinking 1s infinite ease"
              break;
            case "-":
              setNum1(parseFloat(num1) - parseFloat(num2))
              resultRef.current.style.animation = "blinking 1s infinite ease"
              break;
            case "/":
              setNum1(parseFloat(num1) / parseFloat(num2))
              resultRef.current.style.animation = "blinking 1s infinite ease"
              break;
            case "*":
              setNum1(parseFloat(num1) * parseFloat(num2))
              resultRef.current.style.animation = "blinking 1s infinite ease"
              break;
            default:
              break;
          }
          setNum2()
          setProp(e.innerText)
        }
        if (num1 !== undefined && prop == undefined) {
          setProp(e.innerText)
          setView(num1 + e.innerText)
        }
      }
      if (e.innerText === ",") {
        if (num1 !== undefined) {
          setView(`${num1}.`)
          setNum1(`${num1}.`)
        }
        if (num1 !== undefined && num2 !== undefined) {
          setView(`${num1}+${num2}.`)
          setNum2(`${num2}.`)
        }
      }
      if (e.innerText === "↵") {
        if (prop !== undefined && num2 !== undefined) {
          let newN2 = num2.split("")
          let removedNumber = newN2.pop()
          if (equalRef.current.getAttribute("was-used") === "true") {
            setNum1(view.toString().replace(regex, ""))
            setNum2()
          }
          setView(view.toString().replace(regex, ""))
          setNum2(newN2.join(""))
        } else {
          if (prop == undefined && num2 == undefined) {
            setView(view.toString().replace(regex, ""))
            setNum1(view.toString().replace(regex, ""))
          } else {
            setView(view.toString().replace(view[view.length - 1], ""))
            setNum1(view.replace(view[view.length - 1], ""))
          }
        }
      }
      if (e.innerText === "=") {
        if (num1 === "" || num2 === "") {
          resultRef.current.style.animation = ""
          setView("")
          setNum1()
          setNum2()
          setProp()
          return
        }
        if (num1 !== undefined && prop !== undefined && num2 !== undefined) {
          switch (prop) {
            case "+":
              setView(parseFloat(num1) + parseFloat(num2))
              setNum1(parseFloat(num1) + parseFloat(num2))
              setNum2()
              setProp()
              break;
            case "-":
              setView(parseFloat(num1) - parseFloat(num2))
              setNum1(parseFloat(num1) - parseFloat(num2))
              setNum2()
              setProp()
              break;
            case "/":
              setView(parseFloat(num1) / parseFloat(num2))
              setNum1(parseFloat(num1) / parseFloat(num2))
              setNum2()
              setProp()
              break;
            case "x":
              setView(parseFloat(num1) * parseFloat(num2))
              setNum1(parseFloat(num1) * parseFloat(num2))
              setNum2()
              setProp()
              break;
            default:
              break;
          }
          equalRef.current.setAttribute("was-used", "true")
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
          <div ref={equalRef} was-used="false" className="grid-equal span-border-right">=</div>
          <div calc-number="true" className="grid-zero span-border-left">0</div>
          <div>,</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator