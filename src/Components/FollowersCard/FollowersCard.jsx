import React from 'react'
import './FollowerCard.css'
import { Followers } from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
       <h3>Who is following you</h3>
       {Followers.map((follower,id)=>{
        return(
          <div className="follower">
            <div>
            <img src={follower.img} alt="" className='followerImage' />
            <div className="followerName">
              <span>{follower.name}</span>
              <span>@{follower.usermane}</span>
            </div>
            </div>
            <button className='button follow-button'>Follow</button>
          </div>
          // end of the follower
        )
       })}
    </div>
  )
}

export default FollowersCard