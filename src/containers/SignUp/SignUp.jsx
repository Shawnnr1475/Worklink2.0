import "./signUp.css"

const SignUp = ({SignInClick}) => {
  return (
    <div className="SignUp">
      <h1>WORKLINK</h1>
      <form className="sign-up-form-container">
        <h2>Sign Up</h2>
        <div className="inputs sign-up">
          <input className="input" type="text" name="firstname" id="" placeholder="Firstname" />
          <input className="input" type="text" name="surname" id="" placeholder="Surname" />
          <input className="input" type="email" name="email" id="" placeholder="Email" />
          <input className="input" type="password" name="password" id="" placeholder="Password" />
          <input className="input" type="password" name="cpassword" id="" placeholder="Confirm password"/>
          <input className="input" type="tel" name="cell" id="" placeholder="Cell"/>
          <p onClick={SignInClick}>I have an account</p>
        </div>
        <button onClick={SignInClick} type="button" className="btn">Sign in</button>
      </form>
    </div>
  )
}

export default SignUp