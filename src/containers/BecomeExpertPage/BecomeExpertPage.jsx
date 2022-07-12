import {useNavigate} from "react-router-dom"
import "./becomeExpertPage.css"

import { AddProfilePic, InputAutoComplete } from "../../components"

const BecomeExpertPage = () => {
  const navigate = useNavigate()
  return (
    <div className="BecomeExpertPage">
      <h1>WORKLINK</h1>
      <form className="become-expert-form-container">
        <h2>Become Expert</h2>
        <div className="inputs become-expert-inputs">
          <AddProfilePic/>
          <input className="input" type="text" name="firstname" id="" placeholder="Firstname" />
          <input className="input" type="text" name="surname" id="" placeholder="Surname" />
          <input className="input" type="email" name="email" id="" placeholder="Email" />
          <InputAutoComplete/>
          <input className="input" type="password" name="password" id="" placeholder="Password" />
          <input className="input" type="password" name="cpassword" id="" placeholder="Confirm password"/>
          <input className="input" type="tel" name="cell" id="" placeholder="Cell"/>
        </div>
        <button type="button" className="btn" onClick={()=>{navigate("/sign-in")}}>Sign up</button>
      </form>
    </div>
  )
}

export default BecomeExpertPage