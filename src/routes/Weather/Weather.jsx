// CSS and Images
import "./Weather.css"
import windImg from "../../assets/images/wind.png"
import humidityImg from "../../assets/images/humidity.png"

// Components
import PhoneTop from "../../components/Phone/PhoneTop/PhoneTop"
import PhoneTopBar from "../../components/Phone/PhoneTopBar/PhoneTopBar"

// Hooks
import { useState, useRef } from "react"

const URL = import.meta.env.VITE_API_KEY
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="

const Weather = () => {
  const [cityInput, setCityInput] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [temp, setTemp] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [icon, setIcon] = useState("")
  const [alt, setAlt] = useState("")
  const [wind, setWind] = useState(0)
  const inputRef = useRef()
  const divRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputRef.current.value !== "") {
      getWeather(inputRef.current.value)
    }
  }

  const getWeather = async (city) => {
    const res = await fetch(`${apiURL}${city}&appid=${URL}&units=metric&lang=pt_br`)
    const data = await res.json()

    try {
      setCityInput("")
      setCity(data.name)
      setCountry(data.sys.country)
      setTemp(data.main.temp)
      setHumidity(data.main.humidity)
      setIcon(data.weather[0].icon)
      setAlt(data.weather[0].main)
      setWind(data.wind.speed)
      divRef.current.style.height = "32.6em"
    } catch (error) {
      console.log(error)
      divRef.current.style.height = ""
      alert("City not found")
    }
  }

  return (
    <div className="app-main-page weather-container">
      <PhoneTop addClass="phone-clock-app" />
      <PhoneTopBar addClass="phone-top-bar-app" />
      <div className="weather-app">
        <h2>Weather</h2>
        <div ref={divRef} className="weather-app-container">
          <div className="weather-app-container-top">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter a city name"
                onChange={(e) => setCityInput(e.target.value)}
                value={cityInput}
                ref={inputRef}
              />
              <input
                type="submit"
                value="Search"
              />
            </form>
          </div>
          {city ? (
            <div className="weather-app-container-main">
            {country && <h3>{city}, {country}</h3>}
            {temp && <span>{temp}°C</span>}
            {icon && <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt={alt} />}
            <div className="wind-humidity">
              {wind && (
                <div className="wind">
                  <img src={windImg} alt="Wind" />
                  <span>{wind}</span>
                </div>
              )}
              {humidity && (
                <div className="humidity">
                  <img src={humidityImg} alt="Humidity" />
                  <span>{humidity}</span>
                </div>
              )}
            </div>
          </div>
          ) : (
            <p>No city searched</p>
          )}
        </div>
      </div>
    </div>

  )
}

export default Weather