import "./navbar.css"
import {Logo , NavbarLinks, Menu} from "../../components"

const Navbar = () => {
  return (
    <div className="Navbar">
        <Logo/>
        <NavbarLinks/>
        <Menu/>
    </div>
  )
}

export default Navbar