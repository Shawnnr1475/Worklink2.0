import "./signIn.css"
import { useNavigate } from "react-router-dom"
const SignIn = () => {
  const navigate = useNavigate()
  return (
    <div className="SignIn">
      <h1>WORKLINK</h1>
      <form className="sign-in-form-container">
        <h2>Sign in</h2>
        <div className="inputs sign-in">
          <input className="input" type="email" name="email" id="" placeholder="Email" />
          <input className="input" type="password" name="password" id="" placeholder="Password" />
          <p onClick={()=>{navigate("/sign-up")}}>Create a new account</p>
        </div>
        <button  type="button" className="btn" onClick={()=>{navigate("/find-expert")}}>Sign in</button>
      </form>
    </div>
  )
}

export default SignIn