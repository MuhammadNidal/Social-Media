import React,{useState,useRef} from 'react'
import "./PostShare.css"
import ProfileImage from "../../img/profileImg.jpg"
import { GrGallery } from "react-icons/gr";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
const PostShare = () => {
    const [image, setImage]=useState(null)
    const imageRef=useRef()
    const imageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            const img=event.target.files[0];
            setImage({
                image:URL.createObjectURL(img)
            })
        }
    }
    const handleClick = () => {
        // Check if the ref and its current value exist
        if (imageRef && imageRef.current) {
          // Access the current property and call the click method
          imageRef.current.click();
        }
      };
   
  return (
    <div className='PostShare'>
    <img src={ProfileImage} alt="" />
    <div>
        <input type="text" placeholder='whats happening' />
        <div className="PostOptions">
        <div className="option" style={{color:'var(--photo)'}}
        onClick={handleClick}
        >
            <GrGallery/>
            photo
        </div>
        <div className="option"style={{color:'var(--video)'}}>
            <FaRegPlayCircle />
            video
        </div>
        <div className="option"style={{color:'var(--location)'}}>
            <MdLocationPin/>
            location
        </div>
        <div className="option"style={{color:'var(--shedule)'}}>
            <SlCalender/>
            Shedule
        </div>
        <button className='button post_share_button'>share</button>
        <div style={{display:"none"}}>
            <input type="file" name='myImage' ref={imageRef} onChange={imageChange}/>
        </div>
    </div>
    {/* end of the post option share */}
    
    {image &&
    <div className="PreviewIamge">
        <RxCross2 onClick={()=>setImage(null)}/>
        <img src={image.image} alt="" />
    </div>
    }
    </div>
    
    </div>
    // end of the post share 
  )
}

export default PostShare