import React from 'react'
import './LogoSearch.css'
import logo from "../../img/logo.png"
import { CiSearch } from "react-icons/ci";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
       <img src={logo} alt="" />
       <div className="search">
        <input type='text' placeholder='#explore'/>
        <div className="search_icon">
            <CiSearch/>
       </div>
       {/* end of seach icon */}
       </div>
       {/* end of the search */}
       
    </div>
  )
}

export default LogoSearch
