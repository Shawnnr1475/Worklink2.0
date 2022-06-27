import "./signIn.css"
const SignIn = ({SignUpClick,NavToFindExpert}) => {
  return (
    <div className="SignIn">
      <h1>WORKLINK</h1>
      <form className="sign-in-form-container">
        <h2>Sign in</h2>
        <div className="inputs sign-in">
          <input className="input" type="email" name="email" id="" placeholder="Email" />
          <input className="input" type="password" name="password" id="" placeholder="Password" />
          <p onClick={SignUpClick}>Create a new account</p>
        </div>
        <button onClick={NavToFindExpert}  type="button" className="btn">Sign in</button>
      </form>
    </div>
  )
}

export default SignIn