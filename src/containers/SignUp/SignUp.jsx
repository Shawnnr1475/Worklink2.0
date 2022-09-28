import "./signUp.css"
import { useNavigate } from "react-router-dom"
import { InputAutoComplete } from "../../components"

const SignUp = () => {
  const navigate = useNavigate()
  
  
  function getDataFromInputs(){
    const inputs = document.querySelectorAll("input")

    const coor = inputs[4].value.split(",")
    coor[0] = parseFloat(coor[0])
    coor[1] = parseFloat(coor[1])
    const data = {
      name: inputs[0].value,
      surname: inputs[1].value,
      email: inputs[2].value,
      address: inputs[3].value,
      coordinates: coor,
      password: inputs[6].value,
      cell:inputs[7].value
    }

    return data
  }

  async function SignUpClick(){
    const data = getDataFromInputs()
    await fetch(process.env.REACT_APP_BASE_URL+"/client/register",{
      method : "POST",
      headers:{
        "Content-type":"application/json"
      },
      mode: "no-cors",
      body : JSON.stringify(data)
    }).then(res=>{
      res.json()
    })
    .then(result=>{console.log(result)})
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="SignUp">
      <h1>WORKLINK</h1>
      <form className="sign-up-form-container">
        <h2>Sign Up</h2>
        <div className="inputs sign-up">
          <input className="input" type="text" name="firstname" id="" placeholder="Firstname" />
          <input className="input" type="text" name="surname" id="" placeholder="Surname" />
          <input className="input" type="email" name="email" id="" placeholder="Email" />
          <InputAutoComplete/>
          <input className="input" type="password" name="password" id="" placeholder="Password" />
          <input className="input" type="password" name="cpassword" id="" placeholder="Confirm password"/>
          <input className="input" type="tel" name="cell" id="" placeholder="Cell"/>
          <p onClick={()=>{navigate("/sign-in")}}>I have an account</p>
        </div>
        <button type="button" className="btn" onClick={()=>{SignUpClick()}}>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp