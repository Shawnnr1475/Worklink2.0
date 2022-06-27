import './home.css'
import  { Navbar, Main, Footer} from "../../containers"

const Home = ({SignUpClick,SignInClick}) => {
  return (
    <div className='Home'>
      <div>
        <Navbar
          SignInClick={SignInClick}
        />
        <Main
          SignUpClick={SignUpClick}
        />
        <Footer/>
      </div>
    </div>
  )
}

export default Home