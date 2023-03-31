// CSS and Icons
import "./PhoneTop.css"
import { BsBarChartFill, BsBatteryFull } from "react-icons/bs"
import { IoIosWifi } from "react-icons/io"

// Components
import PhoneClock from "../PhoneClock/PhoneClock"

const PhoneTop = ({addClass}) => {
  return (
    <>
      <div className="phone-inside-top">
        <div className={`phone-clock ${addClass}`}>
          <PhoneClock />
        </div>
        <div className="phone-items">
          <BsBarChartFill />
          <IoIosWifi />
          <BsBatteryFull />
        </div>
      </div>
    </>
  )
}

export default PhoneTop