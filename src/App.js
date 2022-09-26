import './App.css';
import{ SignIn, SignUp, Home, FindExpertPage, BecomeExpertPage, ErrorPage,LoadingPage} from "./containers"
import { Routes, Route} from "react-router-dom";
import {useEffect} from "react"



function App() {
  useEffect(()=>{
    const fetchClients = async()=>{
      console.log(process.env.REACT_APP_BASE_URL + "/clients")
      try{
        const res = await fetch(process.env.REACT_APP_BASE_URL + "/clients")
        const data = await res.json()
        console.log(data)

      }
      catch(e){
        console.log(e)
      }
    }
    fetchClients()
  },[])
  const jobTitles = ["Painter","Tie Installer","Brick Layer", "Plumber"]
  return (
    <div className="App">
      <LoadingPage/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/find-expert' element={<FindExpertPage jobTitles={jobTitles}/>}/>
        <Route path='/become-expert' element={<BecomeExpertPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
