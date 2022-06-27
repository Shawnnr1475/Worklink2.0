import "./findExpertPage.css"
import { Map, SearchResults } from "../../containers"
import { ExpertFullInfor } from "../../components"

const FindExpertPage = ({jobTitles}) => {
  return (
    <div className="FindExpertPage">
      <Map jobTitles={jobTitles}/>
    </div>
  )
}

export default FindExpertPage