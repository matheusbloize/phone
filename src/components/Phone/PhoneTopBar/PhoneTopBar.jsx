// CSS and Images
import "./PhoneTopBar.css"

const PhoneTopBar = ({addClass}) => {
  return (
    <>
      <div className={`phone-top-bar ${addClass}`}>
        <div className="phone-top-speaker"></div>
        <div className="phone-top-camera"></div>
      </div>
    </>
  )
}

export default PhoneTopBar