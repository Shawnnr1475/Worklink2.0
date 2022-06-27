import "./expertFullInfor.css"

const ExpertFullInfor = () => {
  return (
    <div className="ExpertFullInfor">
        <div className="expert-full-infor">
            <div className="full-infor-left">
                <div className="full-profile-pic-container">
                    <img src="" alt="" />  
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
                    <button className="btn-cancel">Cancel</button>
                    <button className="btn">Request a Job</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpertFullInfor