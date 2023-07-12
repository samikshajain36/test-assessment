import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from "axios"

const Usercard = () => {
  const [post, setPost] = useState({})

  const param = useParams()
  useEffect(() => {
    axios(`http://jsonplaceholder.typicode.com/posts/${param._id}`).then(res => setPost(res.data))
  }, [])

  return (
    <div className='my-24'>
      <h1>
        {post.id}
      </h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Usercard