// CSS and Images
import "./PhoneTopBar.css"
import lens from "../../../assets/images/lens.png"

const PhoneTopBar = ({addClass}) => {
  return (
    <>
      <div className={`phone-top-bar ${addClass}`}>
        <div className="phone-top-speaker"></div>
        <div className="phone-top-camera">
          {/* <img src={lens} alt="Camera lens" /> */}
        </div>
      </div>
    </>
  )
}

export default PhoneTopBar