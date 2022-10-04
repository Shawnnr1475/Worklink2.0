import "./signIn.css"
import { useNavigate } from "react-router-dom"
const SignIn = () => {
  const navigate = useNavigate()
  const axios = require('axios').default;

  async function SignInClick(){
    const inputs = document.querySelectorAll("input")
    const data = {
      email: inputs[0].value,
      password: inputs[1].value
    }

    await axios.post(process.env.REACT_APP_BASE_URL+'/client/signin', data)
    .then(function (response) {
      if (response.status === 200){
        navigate("/find-expert")
      }
      else if (response.status === 401){
        console.log(response)
      }
      else if(response.status === 404){
        console.log(response)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

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
        <button  type="button" className="btn" onClick={()=>{SignInClick()}}>Sign in</button>
      </form>
    </div>
  )
}

export default SignIn