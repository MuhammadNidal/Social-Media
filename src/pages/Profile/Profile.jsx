import React from 'react'
import './Profile.css'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft'
import PostSide from '../../Components/PostSide/PostSide'
import RightSide from '../../Components/RightSide/RightSide'
const Profile = () => {
  return (
    <div className='profile'>
        <ProfileLeft/>
        <div className="profile_center">
            <ProfileCard/>
            <PostSide/>
        </div>
        {/* end of the profile center div */}
        <RightSide/>
    </div>
  )
}

export default Profile