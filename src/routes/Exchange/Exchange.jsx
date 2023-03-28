// CSS
import "./Exchange.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useColor } from "../../hooks/useColor"
import { useEffect, useState, useRef } from "react"

const Exchange = () => {
  const [firstCoin, setFirstCoin] = useState("dollar")
  const [secondCoin, setSecondCoin] = useState("euro")
  const [amount, setAmout] = useState()
  const inputRef = useRef()

  useColor()

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputRef.current.value !== "") {
      console.log(firstCoin)
      console.log(secondCoin)
      console.log(amount)
      console.log(inputRef.current.value)
      getExchange("dollar", "euro", inputRef.current.value)
    }
  }

  const getExchange = async (firstC, secondC, amount) => {
    const res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${firstC}&from=${secondC}&amount=${amount}`, {
      headers: {
        "apikey": "1k5eETEMptIlL1BS9djBNyQshxb5EZ3X"
      }
    })
    const data = await res.json()

    console.log(data)

    try {

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="app-main-page exchange-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>Exchange</h2>
      <div className="exchange-app">
        <div className="first-coin">
          <div className="coin-symbol">
            {/* <select id="coin-symbol-1">

            </select> */}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a quantity"
              ref={inputRef}
              value={firstCoin}
              onChange={(e) => setFirstCoin(e.target.value)}
            />
          </form>
        </div>
        <div className="second-coin">
          <div className="coin-symbol">R$</div>
          <input
            type="text"
            value={secondCoin}
            onChange={(e) => setSecondCoin(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Exchange