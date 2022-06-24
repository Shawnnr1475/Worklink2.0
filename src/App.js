import './App.css';
import{ SignIn, SignUp, Home, FindExpertPage, BecomeExpertPage, LoadingPage} from "./containers"

function App() {


  const jobTitles = ["Painter","Tie Installer","Brick Layer", "Plumber"]
  return (
    <div className="App">
      <LoadingPage/>
      <Home/>
      {/* <SignIn/>
      <SignUp/>
      <BecomeExpertPage/>
      <FindExpertPage/> */}
    </div>
  );
}

export default App;
