import "./navbar.css"
import {Logo , NavbarLinks} from "../../components"

const Navbar = () => {
  return (
    <div className="Navbar">
        <Logo/>
        <NavbarLinks/>
    </div>
  )
}

export default Navbar