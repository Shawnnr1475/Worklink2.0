import "./addProfilePic.css"
import {useState, useRef} from "react"

const AddProfilePic = () => {

    const [profilepic,setProfilePic] = useState()
    const [imgURL,setImgURL] = useState("")
    const img_containerRef = useRef()

    //Show selected image
    function setImgPreview(){
        const pic = document.querySelector(".input-img").files[0]

        if (pic){
            const reader = new FileReader()

            reader.readAsDataURL(pic)
            reader.addEventListener("load", ()=>{
                setProfilePic(reader.result)
            })
        }
    }

    function AddImg(){
        img_containerRef.current.click()
      }
    
    return (
        <div>
            <input name="profilepic" type="file" ref={img_containerRef} className="input-img" onChange={setImgPreview}></input>
            <div className="img-container" onClick={AddImg}>
                {profilepic? <img className="ppic-img" src={profilepic}></img>:
                <img src="/icons8-add-image-30 (1).png" ></img>}
            </div>
        </div>
    )
}

export default AddProfilePic