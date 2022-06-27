import './home.css'
import  { Navbar, Main, Footer} from "../../containers"

const Home = () => {
  return (
    <div className='Home'>
      <div>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home