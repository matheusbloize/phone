// CSS and Images
import "./Memory.css"
import balloon from "../../assets/images/balloon.png"
import water from "../../assets/images/water.png"
import diet from "../../assets/images/diet.png"
import sleeping from "../../assets/images/sleeping.png"
import bookshelf from "../../assets/images/bookshelf.png"
import dumbbell from "../../assets/images/dumbbell.png"
import question_mark from "../../assets/images/question_mark.png"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useColor } from "../../hooks/useColor"
import { useEffect, useState, useRef } from "react"

const Memory = () => {
  const [card1, setCard1] = useState()
  const [card2, setCard2] = useState()
  const [cards] = useState([
    balloon, water, diet, sleeping, bookshelf, dumbbell
  ])
  const [shuffled1, setShuffled1] = useState()
  const [shuffled2, setShuffled2] = useState()

  const divRef = useRef()
  const winMessageRef = useRef()
  const resetButtonRef = useRef()
  useColor()

  useEffect(() => {
    if (divRef.current.children[0] !== undefined) {
      divRef.current.children[4].style.display = "flex"
      divRef.current.children[4].style.width = "11.5em"
      divRef.current.children[4].style.height = "6em"
      divRef.current.children[4].style.position = "absolute"
      divRef.current.children[4].style.top = "22em"
      divRef.current.children[5].style.display = "flex"
      divRef.current.children[5].style.width = "11.5em"
      divRef.current.children[5].style.height = "6em"
      divRef.current.children[5].style.position = "absolute"
      divRef.current.children[5].style.left = "11.5em"
      divRef.current.children[5].style.top = "22em"
    }
  }, [divRef.current])

  const shuffleCards = () => {
    let unshuffled = ["0", "1", "2", "3", "4", "5"]
    let shuffle1 = (unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value))
    let shuffle2 = (unshuffled
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value))

    setShuffled1(shuffle1)
    setShuffled2(shuffle2)
  }

  useEffect(() => {
    setTimeout(() => {
      divRef.current.style.display = "grid"
    }, 1000)
    winMessageRef.current.style.display = "none"
    resetButtonRef.current.style.display = "none"
    shuffleCards()
  }, [])

  useEffect(() => {
    if (card1 !== undefined && card2 !== undefined) {
      for (let i = 0; i < divRef.current.children.length; i++) {
        if (divRef.current.children[i].children[0].getAttribute("card-flipped") === "false" || divRef.current.children[i].children[1].getAttribute("card-flipped") === "false") {
          divRef.current.children[i].style.pointerEvents = "none"
        }
      }
      setTimeout(() => {
        for (let i = 0; i < divRef.current.children.length; i++) {
          divRef.current.children[i].style.pointerEvents = "auto"
        }
      }, 950)
    }
    if (card1 !== undefined && card2 !== undefined && card1.getAttribute("id") === card2.getAttribute("id")) {
      setCard1()
      setCard2()
    }
    if (card1 !== undefined && card2 !== undefined && card1.getAttribute("id") !== card2.getAttribute("id")) {
      if (card1.getAttribute("card-flipped") === "true" && card2.getAttribute("card-flipped") === "true") {
        setTimeout(() => {
          card1.children[1].style.display = "none"
          card2.children[1].style.display = "none"
          card1.setAttribute("card-flipped", "false")
          card2.setAttribute("card-flipped", "false")
          card1.children[0].style.transform = "scale(1)"
          card2.children[0].style.transform = "scale(1)"
        }, 1000)
      }
      setCard1()
      setCard2()
      setTimeout(() => {
        card1.children[0].style.borderColor = "#fff"
        card2.children[0].style.borderColor = "#fff"
      }, 1000)
    }
  }, [card2])

  const rotateCard = (e) => {
    if (e.parentElement.getAttribute("card-flipped") === "false") {
      if (card1 !== undefined && card2 !== undefined) {
        return
      }
      if (card1 == undefined) {
        e.nextElementSibling.style.cursor = "not-allowed"
        setCard1(e.parentElement)
        e.parentElement.setAttribute("card-flipped", "true")
      } else if (card1 !== undefined && card2 == undefined) {
        e.nextElementSibling.style.cursor = "not-allowed"
        setCard2(e.parentElement)
        e.parentElement.setAttribute("card-flipped", "true")
        if (
          divRef.current.children[0].children[0].getAttribute("card-flipped") === "true" &&
          divRef.current.children[0].children[1].getAttribute("card-flipped") === "true" &&
          divRef.current.children[1].children[0].getAttribute("card-flipped") === "true" &&
          divRef.current.children[1].children[1].getAttribute("card-flipped") === "true" &&
          divRef.current.children[2].children[0].getAttribute("card-flipped") === "true" &&
          divRef.current.children[2].children[1].getAttribute("card-flipped") === "true" &&
          divRef.current.children[3].children[0].getAttribute("card-flipped") === "true" &&
          divRef.current.children[3].children[1].getAttribute("card-flipped") === "true" &&
          divRef.current.children[4].children[0].getAttribute("card-flipped") === "true" &&
          divRef.current.children[4].children[1].getAttribute("card-flipped") === "true" &&
          divRef.current.children[5].children[0].getAttribute("card-flipped") === "true" &&
          divRef.current.children[5].children[1].getAttribute("card-flipped") === "true"
        ) {
          setTimeout(() => {
            winMessageRef.current.style.display = "block"
            resetButtonRef.current.style.display = "block"
          }, 1000)
        }
      }
      e.style.transform = "scaleX(-1)"
      e.style.borderColor = "transparent"
      setTimeout(() => {
        e.nextElementSibling.style.display = "block"
      }, 400)
    }
  }

  const resetMemoryGame = () => {
    setCard1()
    setCard2()
    for (let i = 0; i < divRef.current.children.length; i++) {
      divRef.current.children[i].children[0].setAttribute("card-flipped", "false")
      divRef.current.children[i].children[1].setAttribute("card-flipped", "false")
      divRef.current.children[i].children[0].children[0].style.transform = "scaleX(1)"
      divRef.current.children[i].children[1].children[0].style.transform = "scaleX(1)"
      divRef.current.children[i].children[0].children[0].style.borderColor = "#fff"
      divRef.current.children[i].children[1].children[0].style.borderColor = "#fff"
      divRef.current.children[i].children[0].children[1].style.display = "none"
      divRef.current.children[i].children[1].children[1].style.display = "none"
    }
    winMessageRef.current.style.display = "none"
    resetButtonRef.current.style.display = "none"
    shuffleCards()
  }

  return (
    <div className="app-main-page memory-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <h2>Memory</h2>
      <div ref={divRef} onClick={(e) => rotateCard(e.target)} className="memory-app">
        {cards && shuffled1 && cards.map((card, index) => (
          <div key={index}>
            <div id={shuffled1[index]} card-flipped="false" className="memory-cards">
              <img src={question_mark} alt="Question Mark" />
              <img src={cards[shuffled1[index]]} alt={cards[shuffled1[index]].split("/")[cards[0].split("/").length - 1].split(".")[0]} />
            </div>
            <div id={shuffled2[index]} card-flipped="false" className="memory-cards">
              <img src={question_mark} alt="Question Mark" />
              <img src={cards[shuffled2[index]]} alt={cards[shuffled2[index]].split("/")[cards[0].split("/").length - 1].split(".")[0]} />
            </div>
          </div>
        ))
        }
      </div>
      <div ref={winMessageRef} className="memory-win-message">Congrats, you win the memory game! <br />If you want to play again, press the button below.</div>
      <button ref={resetButtonRef} onClick={resetMemoryGame} className="memory-reset-button">Reset</button>
    </div >
  )
}


export default Memory