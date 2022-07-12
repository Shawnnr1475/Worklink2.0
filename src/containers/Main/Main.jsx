import "./main.css"
import {BannerImg} from "../../components"
import { useNavigate } from "react-router-dom"

const Main = () => {
  let navigate = useNavigate()
  return (
    <div className="Main">
      <div className="header">
        <div className="header-content">
          <h2>Local and skilled experts</h2>
          <p>Get skilled experts near you for your home renovations or mantaince</p>
          <button className="btn" onClick={()=>{navigate("/sign-up")}}>Sign up</button>
        </div>
        <BannerImg/>
      </div>

      <div className="fun-facts">
        <div className="fact-1">
          <div className="fact-img-container">
            <img src="/images/man.png" alt="" />
          </div>
          <p>1000 client that are satisfied with our experts</p>
        </div>
        <div className="fact-2">
        <div className="fact-img-container">
            <img className="worker" src="/images/worker.png" alt="" />
          </div>
          <p>100 reggistered experts across the province and near you</p>
        </div>
      </div>

      <div className="findexpert-section">
        <div className="findexpert-content">
          <h3>Find an expert near you</h3>
          <p>Do you need someone to do renovations or maintaince on your home. Click the below ro find the painters, bricklayers, etc near you</p>
          <button className="btn" onClick={()=>{navigate("/find-expert")}}>Find Expert</button>
        </div>
        <div className="findexpert-img-container">
          <img src="/images/map.jpg" alt="" />
        </div>
      </div>

      <div className="become-expert-section">
        <div className="become-expert-img-container">
          <img src="/images/renovation.jpg" alt="" />
        </div>
        <div className="become-expert-content">
          <h3>Become an Expert</h3>
          <p>Are you a contructor and looking for clients near you. Join our team of experts and start working now</p>
          <button className="btn" onClick={()=>{navigate("/become-expert")}}>Become an Expert</button>
        </div>
      </div>
    </div>
  )
}

export default Main