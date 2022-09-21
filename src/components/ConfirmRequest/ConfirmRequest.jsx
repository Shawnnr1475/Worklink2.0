import "./confirmrequest.css"

const ConfirmRequest = ({setShowFullInfor, setShowRequestJob, setShowConfirmRequest})=>{


    const SendRequest = ()=>{
        setShowConfirmRequest(false)
    }
    const BackClickConfirm = ()=>{
        setShowRequestJob(true)
        setShowConfirmRequest(false)

    }
    

    return(
        <div className="ConfirmRequest">
            <div className="confirm-request">
            <div className="confirm-request-left">
                <div className="confirm-profile-pic-container">
                    <img src="https://avatars1.githubusercontent.com/u/35249164?height=180&v=4&width=180" alt="" />
                    <div className="confrim-expert-details">
                        <h1>Name and Surname</h1>
                        <h1>Occupation</h1>
                        <h1>Cell</h1>
                        <h1>Email</h1>  
                    </div>
                </div>

            </div>
            <div className="confirm-request-right">
                <h2>Confirm Request</h2>
                <h1>From</h1>
                <h1>To</h1>
                <h1>Job descriptsion</h1>
                <p>Try a test build and deploy, directly from your Git repository or a folder.</p>
                <div className="full-infor-btn-container">
                    <button type="button" className="btn-cancel" onClick={()=>{BackClickConfirm()}}>Back</button>
                    <button className="btn" onClick = {()=>{SendRequest()}}>Send Request</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ConfirmRequest