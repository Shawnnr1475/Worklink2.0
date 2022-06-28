import "./navbarLinks.css"
import { useNavigate } from "react-router-dom"

const NavbarLinks = () => {
  let navigate = useNavigate()
  return (
    <div className="Navbarlinks">
      <a href="/">Home</a>
      <a href="/">About</a>
      <button onClick={()=>{navigate("/sign-in")}}>Sign in</button>
    </div>
  )
}

export default NavbarLinks