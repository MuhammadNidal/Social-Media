import React from 'react'
import './PostSide.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
const PostSide = () => {
  return (
    <div className="PostSide">
<PostShare/>
<Posts/>
    </div>
    // end of the post side 
  )
}

export default PostSide