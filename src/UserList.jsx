import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid';
import UserCard from './Usercard';

const MovieList = () => {
  const [movie, setMovie] = useState([])
  const fetchData = async () => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts")
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
      {/* <div>
      <UserCard movie={movie}/>
    </div> */}

      

      <div style={{ marginTop: "12px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            movie && movie.map((item, index) => {
              return (

                <a href={`/post/${item.id}`}>
                  <Grid item xs={2} sm={4} md={4} key={index}><div className='row' style={{ backgroundColor: "red", border: "1px solid black", padding: "4px", height: "140px" }}>
                    <div className='coloumn'>
                      <div key={index}>{item.title}</div>
                      <div >{item.userId}</div>
                      <div >{item.body}</div>
                    </div>
                  </div>
                  </Grid >
                </a>

              )
            })
          }
        </Grid>
      </div>

    </>
  )
}

export default MovieList


