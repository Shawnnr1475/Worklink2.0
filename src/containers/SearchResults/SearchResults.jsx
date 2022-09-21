import "./searchResults.css"
import { PreviewExpertInfor } from "../../components"

const SearchResults = ({setShowFullInfor}) => {
  return (
    <div className="SearchResults">
        <PreviewExpertInfor setShowFullInfor ={setShowFullInfor}/>
    </div>
  )
}

export default SearchResults