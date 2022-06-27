import "./menu.css"

const Menu = () => {
    function menuClick() {
        const menu = document.querySelector(".Menu")
        menu.classList.toggle("change")
      }
  return (
    <div className="Menu" onClick={menuClick}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
    </div>
  )
}

export default Menu