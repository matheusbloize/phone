// Hooks
import { useEffect, useState } from "react"

const PhoneClock = () => {
  const [clock, setClock] = useState(0)
  const [hour, setHour] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const setTime = () => {
    const date = new Date()
    setHour(date.getHours().toString())
    setMinutes(date.getMinutes().toString())
  }

  const validateZero = (number) => {
    return number < 10 ? `0${number}` : number
  }

  useEffect(() => {
    setTime()
    setClock(`${validateZero(hour)}:${validateZero(minutes)}`)
  }, [])

  useEffect(() => {
    setInterval(() => {
      setTime()
    }, 1000)
    setClock(`${validateZero(hour)}:${validateZero(minutes)}`)
  }, [setTime])

  return (
    <div>{clock}</div>
  )
}

export default PhoneClock