import "./previewExpertInfor.css"

const PreviewExpertInfor = ({setShowFullInfor}) => {

  return (
    <div className="PreviewExpertInfor" onClick={()=>{setShowFullInfor(true)}}>
      <div className="profile-pic-container">
        <img src="https://avatars1.githubusercontent.com/u/35249164?height=180&v=4&width=180" alt="" />  
      </div>
      <div className="infor-content">
        <h1>Name and Surname</h1>
        <h2>Occupation</h2>
        <h3>Rating</h3>
        <h3>Avaliable</h3>
      </div>
    </div>
  )
}

export default PreviewExpertInfor