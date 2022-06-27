import "./findExpertPage.css"
import { Map} from "../../containers"


const FindExpertPage = ({jobTitles}) => {
  return (
    <div className="FindExpertPage">
      <Map jobTitles={jobTitles}/>
    </div>
  )
}

export default FindExpertPage