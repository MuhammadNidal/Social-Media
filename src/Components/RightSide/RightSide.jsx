import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import  Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { CiSettings } from "react-icons/ci";
import TrendCard from '../TrendCard/TrendCard'
const RightSide = () => {
  return (
    <div className='RightSide'>
        <div className="nav_icon">
            <img src={Home} alt="" />
            <CiSettings size={30}/>
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard/>
        <button className='button right_button'>
          Share
        </button>
    </div>
  )
}

export default RightSide