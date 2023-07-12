import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import div from '@mui/material/div';
// import UserCard from './Usercard';

const MovieList = () => {
  const [movie, setMovie] = useState([])
  const fetchData = async () => {
  const response = await axios.get("http://jsonplaceholder.typicode.com/posts", {
    headers: { 
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  })
      .then((res) => {
        setMovie(res.data)
        console.log("API Data:- ", res.data)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='mt-24'>
        <div className='grid grid-cols-1 lg:grid-cols-3 w-full my-8 z-40'>
          {
            movie && movie.map((item, index) => {
              return (

                <a href={`/post/${item.id}`} className='m-4 p-4 border-2 border-black hover:scale-105 duration-300'>
                  <div className='flex flex-col justify-between items-between min-h-[250px] max-h-auto'>
                    <h3 className='text-3xl font-semibold' key={index}>{item.title}</h3>
                    <div className='font-bold text-slate-500'>
                      {item.body}
                    </div>
                  </div>
                </a>

              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default MovieList


