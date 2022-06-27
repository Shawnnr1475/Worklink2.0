import "./navbarLinks.css"

const NavbarLinks = ({SignInClick}) => {
  return (
    <div className="Navbarlinks">
      <a href="#">Home</a>
      <a href="#">About</a>
      <button onClick={SignInClick}>Sign in</button>
    </div>
  )
}

export default NavbarLinks