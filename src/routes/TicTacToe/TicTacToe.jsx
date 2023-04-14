// CSS
import "./TicTacToe.css"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useState, useRef, useEffect } from "react"
import { useColor } from "../../hooks/useColor"

const TicTacToe = () => {
  const [winner, setWinner] = useState()
  const [player, setPlayer] = useState()
  const divRef = useRef()

  useColor()

  useEffect(() => {
    const setFirstPlayer = Math.floor(Math.random() * 2)
    setFirstPlayer === 0 ? setPlayer("X") : setPlayer("O")
  }, [])

  useEffect(() => {
    for(let i = 0; i < divRef.current.children.length; i++) {
      if(divRef.current.children[i].getAttribute("used-area") === "true") {
        divRef.current.children[i].style.cursor = "not-allowed"
      }
    }

    if (
      divRef.current.children[0].innerText === "X" && divRef.current.children[1].innerText === "X" && divRef.current.children[2].innerText === "X" ||
      divRef.current.children[3].innerText === "X" && divRef.current.children[4].innerText === "X" && divRef.current.children[5].innerText === "X" ||
      divRef.current.children[6].innerText === "X" && divRef.current.children[7].innerText === "X" && divRef.current.children[8].innerText === "X" ||
      divRef.current.children[0].innerText === "X" && divRef.current.children[3].innerText === "X" && divRef.current.children[6].innerText === "X" ||
      divRef.current.children[1].innerText === "X" && divRef.current.children[4].innerText === "X" && divRef.current.children[7].innerText === "X" ||
      divRef.current.children[2].innerText === "X" && divRef.current.children[5].innerText === "X" && divRef.current.children[8].innerText === "X" ||
      divRef.current.children[0].innerText === "X" && divRef.current.children[4].innerText === "X" && divRef.current.children[8].innerText === "X" ||
      divRef.current.children[2].innerText === "X" && divRef.current.children[4].innerText === "X" && divRef.current.children[6].innerText === "X"
    ) {
      setWinner("X")
      document.querySelector(".tictactoe-winner").style.display = "flex"
      document.querySelector(".tictactoe-winner span").style.color = "#778be6"
      document.querySelector(".tictactoe-turn").style.display = "none"
      for (let i = 0; i < divRef.current.children.length; i++) {
        divRef.current.children[i].style.pointerEvents = "none"
      }
    } else if (
      divRef.current.children[0].innerText === "O" && divRef.current.children[1].innerText === "O" && divRef.current.children[2].innerText === "O" ||
      divRef.current.children[3].innerText === "O" && divRef.current.children[4].innerText === "O" && divRef.current.children[5].innerText === "O" ||
      divRef.current.children[6].innerText === "O" && divRef.current.children[7].innerText === "O" && divRef.current.children[8].innerText === "O" ||
      divRef.current.children[0].innerText === "O" && divRef.current.children[3].innerText === "O" && divRef.current.children[6].innerText === "O" ||
      divRef.current.children[1].innerText === "O" && divRef.current.children[4].innerText === "O" && divRef.current.children[7].innerText === "O" ||
      divRef.current.children[2].innerText === "O" && divRef.current.children[5].innerText === "O" && divRef.current.children[8].innerText === "O" ||
      divRef.current.children[0].innerText === "O" && divRef.current.children[4].innerText === "O" && divRef.current.children[8].innerText === "O" ||
      divRef.current.children[2].innerText === "O" && divRef.current.children[4].innerText === "O" && divRef.current.children[6].innerText === "O"
    ) {
      setWinner("O")
      document.querySelector(".tictactoe-winner").style.display = "flex"
      document.querySelector(".tictactoe-winner span").style.color = "#d197cb"
      document.querySelector(".tictactoe-turn").style.display = "none"
      for (let i = 0; i < divRef.current.children.length; i++) {
        divRef.current.children[i].style.pointerEvents = "none"
      }
    } else if (
      divRef.current.children[0].getAttribute("used-area") === "true" &&
      divRef.current.children[1].getAttribute("used-area") === "true" &&
      divRef.current.children[2].getAttribute("used-area") === "true" &&
      divRef.current.children[3].getAttribute("used-area") === "true" &&
      divRef.current.children[4].getAttribute("used-area") === "true" &&
      divRef.current.children[5].getAttribute("used-area") === "true" &&
      divRef.current.children[6].getAttribute("used-area") === "true" &&
      divRef.current.children[7].getAttribute("used-area") === "true" &&
      divRef.current.children[8].getAttribute("used-area") === "true" &&
      winner == undefined
    ) {
      setWinner("Tie")
      document.querySelector(".tictactoe-winner").style.display = "flex"
      document.querySelector(".tictactoe-winner span").style.color = "#FFFDD0"
      document.querySelector(".tictactoe-turn").style.display = "none"
      for (let i = 0; i < divRef.current.children.length; i++) {
        divRef.current.children[i].style.pointerEvents = "none"
      }
    }
  }, [player])

  const addPlay = (e) => {
    if (e.getAttribute("used-area") === "false") {
      e.setAttribute("used-area", "true")
      e.innerHTML = player
      player === "X" ? e.style.backgroundColor = "#778be6" : e.style.backgroundColor = "#d197cb"
      player === "X" ? setPlayer("O") : setPlayer("X")
    } else {
      return
    }
  }

  const resetGame = () => {
    setWinner()
    const setFirstPlayer = Math.floor(Math.random() * 2)
    setFirstPlayer === 0 ? setPlayer("X") : setPlayer("O")
    for (let i = 0; i < divRef.current.children.length; i++) {
      divRef.current.children[i].innerHTML = ""
      divRef.current.children[i].setAttribute("used-area", "false")
      divRef.current.children[i].style.pointerEvents = "all"
      divRef.current.children[i].style.backgroundColor = ""
      divRef.current.children[i].style.cursor = "pointer"
    }
    document.querySelector(".tictactoe-winner").style.display = "none"
    document.querySelector(".tictactoe-turn").style.display = "flex"
  }

  const keyUpFn = (e) => {
    if(e.keyCode === 13) {
      addPlay(e.target)
    }
  }

  return (
    <div className="app-main-page tictactoe-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>Tic Tac Toe</h2>
      <div ref={divRef} onClick={(e) => addPlay(e.target)} className="tictactoe-app">
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="1" className="tictactoe-area bottom right"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="2" className="tictactoe-area bottom right"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="3" className="tictactoe-area bottom"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="4" className="tictactoe-area bottom right"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="5" className="tictactoe-area bottom right"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="6" className="tictactoe-area bottom"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="7" className="tictactoe-area right"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="8" className="tictactoe-area right"></div>
        <div tabIndex="0" onKeyUp={(e) => keyUpFn(e)} used-area="false" area-id="9" className="tictactoe-area"></div>
      </div>
      <div className="tictactoe-info">
        <div className="tictactoe-turn">
          <p>Actual Turn: </p>
          <span>{player}</span>
        </div>
      </div>
      <div className="tictactoe-winner">
        <p>Winner: <span>{winner}</span></p>
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  )
}

export default TicTacToe