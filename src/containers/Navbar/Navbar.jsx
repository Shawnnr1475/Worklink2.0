import "./navbar.css"
import {Logo , NavbarLinks, Menu} from "../../components"

const Navbar = ({SignInClick}) => {
  return (
    <div className="Navbar">
        <Logo/>
        <NavbarLinks
          SignInClick={SignInClick}
        />
        <Menu/>
    </div>
  )
}

export default Navbar