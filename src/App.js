import {useNavigate} from 'react-router-dom';
import './App.css';
import{ SignIn, SignUp, Home, FindExpertPage, BecomeExpertPage, LoadingPage} from "./containers"
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const primaryURL = "http://localhost:3000/" || "https://work-link.netlify.app/"
  const jobTitles = ["Painter","Tie Installer","Brick Layer", "Plumber"]

  const navigate = useNavigate()
  
  function SignUpClick(){
    navigate("/sign-Up",{replace:false})
  }

  function SignInClick(){
    navigate("/sign-in",{replace:false})
  }

  function NavToFindExpert(){
    navigate("/find-expert",{replace:false})
  }
  return (
    <div className="App">
        {window.location.href === primaryURL ? <LoadingPage/> :""}
      <Routes>
        <Route path='/' 
        element={
        <Home 
          SignUpClick={SignUpClick}
          SignInClick = {SignInClick}
        />
        }/>
        <Route path='/sign-in' element={<SignIn 
          SignUpClick={SignUpClick}
          NavToFindExpert={NavToFindExpert}
        />}/>
        <Route path='/sign-up' element={<SignUp
          SignInClick={SignInClick}
        />}/>
        <Route path='/find-expert' element={<FindExpertPage
          jobTitles={jobTitles}
        />}/>
        <Route path='/become-expert' element={<BecomeExpertPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
