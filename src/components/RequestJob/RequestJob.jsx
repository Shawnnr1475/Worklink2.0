import "./requestjob.css"

const RequestJob = ({setShowConfirmRequest, setShowFullInfor, setShowRequestJob}) => {
    
    const BackClickRequset = ()=>{
        setShowFullInfor(true)
        setShowRequestJob(false)
        
    }

    const ConfirmClick = ()=>{
        setShowConfirmRequest(true)
        setShowRequestJob(false)
     
    }
     return (
      <div className="RequestJob">
        <div className="request-job">
            <div className="request-job-left">
                <div className="request-profile-pic-container">
                    <img src="https://avatars1.githubusercontent.com/u/35249164?height=180&v=4&width=180" alt="" />
                    <div className="request-expert-details">
                        <h1>Name and Surname</h1>
                        <h1>Occupation</h1>
                        <h1>Cell</h1>
                        <h1>Email</h1>  
                    </div>
                </div>

            </div>
            <div className="request-job-right">
                <h2>Request a Job</h2>
                <textarea name="" id="" placeholder="Describe the job you want done..."></textarea>
                <div className="full-infor-btn-container">
                    <button type="button" className="btn-cancel" onClick={()=>{BackClickRequset()}}>Back</button>
                    <button className="btn" onClick={()=>{ConfirmClick()}}>Confirm</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default RequestJob 