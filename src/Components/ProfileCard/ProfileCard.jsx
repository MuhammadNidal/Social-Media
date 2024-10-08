import React from 'react'
import './ProfileCard.css'
import Cover from "../../img/cover.jpg"
import ProfileImage from "../../img/profileImg.jpg"
const ProfileCard = () => {
  const profilePage=true;
  return (
    <div className="ProfileCard">
       <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={ProfileImage} alt="" />
       </div>
       {/* end of the profile image */}
       <div className="ProfileName">
        <span>Muhammad Nidal</span>
        <span>Software developer</span>
       </div>
       {/* end of the Profile Name  */}
       <div className="followStatus">
        <hr />
        <div>
        <div className="followers">
            <span>6,890</span>
            <span>followers</span>
        </div>
        {/* end of the follower */}
        <div className="verticalLine"> </div>
        <div className="following">
            <span>6</span>
            <span>followeing</span>
        </div>
        {
          profilePage && (
            <>
            <div className="verticalLine"> </div>
        <div className="following">
            <span>16</span>
            <span>posts</span>
        </div>
            </>
          )
        }
        {/* end of the following */}
        </div>
        <hr/>
       </div>
       {/* end of the follower status */}
       {profilePage? '':<span>My Profile</span>}
       
    </div>
  )
}

export default ProfileCard