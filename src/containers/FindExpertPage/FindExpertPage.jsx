import "./findExpertPage.css"
import { Map} from "../../containers"
import { ExpertFullInfor, RequestJob, ConfirmRequest } from "../../components"
import { useState } from "react"


const FindExpertPage = ({jobTitles}) => {
  const [showFullInfor,setShowFullInfor] = useState(false)
  const [showRequestJob,setShowRequestJob] = useState(false)
  const [showConfirmRequest, setShowConfirmRequest] = useState(false)
   return (
    <div className="FindExpertPage">
      <Map jobTitles={jobTitles} setShowFullInfor={setShowFullInfor}/>
      {showFullInfor?<ExpertFullInfor 
        setShowFullInfor={setShowFullInfor} 
        setShowRequestJob = {setShowRequestJob}/>:""}
        
      {showRequestJob?<RequestJob 
        setShowFullInfor={setShowFullInfor} 
        setShowRequestJob={setShowRequestJob}
        setShowConfirmRequest = {setShowConfirmRequest}/>:""}

      {showConfirmRequest?<ConfirmRequest
      setShowConfirmRequest = {setShowConfirmRequest}
      setShowFullInfor = {setShowFullInfor}
      setShowRequestJob = {setShowRequestJob}
      />:""}
    </div>
  )
}

export default FindExpertPage 