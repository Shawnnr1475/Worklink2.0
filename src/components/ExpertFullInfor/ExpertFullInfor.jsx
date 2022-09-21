import "./expertFullInfor.css"

const ExpertFullInfor = ({setShowFullInfor,setShowRequestJob}) => {
  const RequestClick = ()=>{
    setShowRequestJob(true)
    setShowFullInfor(false)
  }  

  return (
    <div className="ExpertFullInfor">
        <div className="expert-full-infor">
            <div className="full-infor-left">
                <div className="full-profile-pic-container">
                    <img src="https://avatars1.githubusercontent.com/u/35249164?height=180&v=4&width=180" alt="" />  
                </div>
            </div>
            <div className="full-infor-right">
                <div className="full-infor-content">
                    <h1>Name and Surname</h1>
                    <h2>Occupation</h2>
                    <h2>Jobs Done</h2>
                    <h3>Rating</h3>
                    <h3>Address</h3>
                    <h3>Cell</h3>
                    <h3>Email</h3>
                </div>
                <div className="full-infor-btn-container">
                    <button type="button" className="btn-cancel" onClick={()=>{setShowFullInfor(false)}}>Cancel</button>
                    <button className="btn" onClick={()=>{RequestClick()}}>Request a Job</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpertFullInfor