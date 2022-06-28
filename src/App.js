import React from 'react';
import './App.css';
import{ SignIn, SignUp, Home, FindExpertPage, BecomeExpertPage, ErrorPage,LoadingPage} from "./containers"
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";



function App() {
  const primaryURL = "http://localhost:3000/" || "https://work-link.netlify.app/"
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
