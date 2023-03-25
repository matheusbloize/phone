// CSS and Images
import "./PhoneBottom.css"
import linkedin from "../../../assets/images/linkedin.png"
import github from "../../../assets/images/github.png"
import instagram from "../../../assets/images/instagram.png"

// Components


const PhoneBottom = () => {
  return (
    <>
      <div className="phone-inside-bottom">
        <div className="phone-links-area">
          <a draggable="false" href="https://www.linkedin.com/in/matheus-bloize/" target="_blank">
            <img className="phone-link" src={linkedin} alt="Linkedin Logo" />
          </a>
          <a draggable="false" href="https://github.com/matheusbloize" target="_blank">
            <img className="phone-link" src={github} alt="GitHub Logo" />
          </a>
          <a draggable="false" href="https://www.instagram.com/matheus.bloize/" target="_blank">
            <img className="phone-link" src={instagram} alt="Instagram Logo" />
          </a>
        </div>
      </div>
    </>
  )
}

export default PhoneBottom