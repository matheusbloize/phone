// CSS and Images
import "./Camera.css"
import gallery from "../../assets/images/gallery.png"
import staring_cat from "../../assets/images/staring_cat.png"

// Components
import { TiArrowSync } from "react-icons/ti"
import { useRef, useEffect } from "react"

const Camera = () => {
  const divTypesRef = useRef()
  const divIconsRef = useRef()
  const mainPhotoRef = useRef()
  const canvasRef = useRef()
  const videoRef = useRef()
  const galleryRef = useRef()

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream
        video.play()
      })
    }
  }, [])

  const changeActiveIcon = (e) => {
    const style = document.createElement("style")
    style.innerHTML = `
    .camera-app-top span:nth-child(${e.getAttribute("id")})::after {
      display: block;
    }
    `
    if (e.getAttribute("icon-active") !== "true") {
      e.setAttribute("icon-active", "true")
      e.append(style)
    } else {
      if (e.tagName === "SPAN") {
        e.children[0].remove()
        e.removeAttribute("icon-active")
      }
    }
  }

  const changeActiveClass = (e) => {
    if (e.tagName === "SPAN") {
      if (e.getAttribute("id") === "camera-app-active") {
        return
      } else {
        for (let i = 0; i <= 3; i++) {
          if (divTypesRef.current.children[i].getAttribute("id")) {
            divTypesRef.current.children[i].removeAttribute("id")
          }
        }
        e.setAttribute("id", "camera-app-active")
      }
    }
  }

  const takePhoto = () => {
    canvasRef.current.height = videoRef.current.videoHeight
    canvasRef.current.width = videoRef.current.videoWidth
    let context = canvasRef.current.getContext("2d")
    context.drawImage(video, 0, 0)
  }

  const getImage = () => {
    galleryRef.current.style.display === "" || galleryRef.current.style.display === "none" ? galleryRef.current.style.display = "block" : galleryRef.current.style.display = "none"
    canvasRef.current.style.display === "" || canvasRef.current.style.display === "none" ? canvasRef.current.style.display = "block" : canvasRef.current.style.display = "none"
  }

  const getMeme = () => {
    if (mainPhotoRef.current.id === "normal") {
      mainPhotoRef.current.style.filter = "none"
      mainPhotoRef.current.style.backgroundImage = `url(${staring_cat})`
      mainPhotoRef.current.style.backgroundSize = `cover`
      mainPhotoRef.current.style.backgroundPosition = `center`
      mainPhotoRef.current.setAttribute("id", "meme")
      videoRef.current.style.display = "none"
    } else if (mainPhotoRef.current.id === "meme") {
      videoRef.current.style.display = "block"
      mainPhotoRef.current.setAttribute("id", "normal")
      mainPhotoRef.current.style.backgroundImage = ""
      mainPhotoRef.current.style.backgroundPosition = ""
    }
  }

  return (
    <div className="app-main-page camera-container">
      <div ref={galleryRef} className="gallery-container"></div>
      <div className="camera-app">
        <div ref={divIconsRef} onClick={(e) => changeActiveIcon(e.target)} className="camera-app-top">
          <span id="1">⚡︎</span>
          <span id="2">HDR</span>
          <span id="3">AI</span>
          <span id="4">⭐</span>
        </div>
        <div ref={mainPhotoRef} id="normal" className="camera-app-main">
          <video ref={videoRef} id="video"  height="100%" width="100%"></video>
          <canvas ref={canvasRef} id="canvas" height="100%" width="100%"></canvas>
        </div>
        <div ref={divTypesRef} onClick={(e) => changeActiveClass(e.target)} className="camera-app-center">
          <span>Pro</span>
          <span>Video</span>
          <span id="camera-app-active">Photo</span>
          <span>Portrait</span>
          <p>.....</p>
        </div>
        <div className="camera-app-bottom">
          <span onClick={getImage} className="gallery-button"><img src={gallery} alt="Gallery" /></span>
          <span onClick={takePhoto} className="photo-button"></span>
          <span onClick={getMeme} className="reverse-button"><TiArrowSync /></span>
        </div>
      </div>
    </div>
  )
}

export default Camera