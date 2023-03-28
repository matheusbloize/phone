// CSS
import "./TicTacToe.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useState } from "react"
import { useColor } from "../../hooks/useColor"

const TicTacToe = () => {
  const [winner, setWinner] = useState()

  useColor()

  return (
    <div className="app-main-page tictactoe-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>Tic Tac Toe</h2>
      <div className="tictactoe-app">
        <div className="tictactoe-area bottom right"></div>
        <div className="tictactoe-area bottom right"></div>
        <div className="tictactoe-area bottom"></div>
        <div className="tictactoe-area bottom right"></div>
        <div className="tictactoe-area bottom right"></div>
        <div className="tictactoe-area bottom"></div>
        <div className="tictactoe-area right"></div>
        <div className="tictactoe-area right"></div>
        <div className="tictactoe-area"></div>
      </div>
      <div className="tictactoe-turn">
        <button>Reset</button>
      </div>
      <div className="tictactoe-winner">
        <p>Vencedor: <span>{winner}</span></p>
      </div>
    </div>
  )
}

export default TicTacToe