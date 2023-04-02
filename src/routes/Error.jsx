// Components
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }, [])

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Error Page</h1>
      <p>Something went wrong, returning to Home</p>
    </div>
  )
}

export default Error