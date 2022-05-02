import { React, useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import PostData from "../db.json"
import image1 from "../images/placeimgs/cetateaSighi.jpg"
import { Data } from '@react-google-maps/api'
import '../css/home.css'
import userEvent from '@testing-library/user-event'

const Home = () => {

  const[width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
      setWidth(carousel.current.scrollWidth+32)
  })

  return (
    <div className='homeBody'>
      <h1>Acasa</h1>
        {PostData.subcontent.map((postDetail)=>{
          return (
            <div>
              <div className='cSubtitle'>{postDetail.title}</div>
              <div className='cDesc'>{postDetail.description}</div>
              <motion.div className='carousel' whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right: 0, left: -width*postDetail.content.length+width}} className='innerCarousel'>
                  {postDetail.content.map((postDet, i)=>{
                    return (
                      <motion.div className='citem' ref={carousel} key={postDetail.id}>
                          <img src={PostData.posts[postDet].mainImg}/>
                          <div className='shadowCnt'>
                            <div className='placeCnt'>
                              <div><h3>{PostData.posts[postDet].title}</h3></div>
                              <Link to={"/explore/place/" + PostData.posts[postDet].id}><p>mai multe</p></Link>
                            </div>
                          </div>
                      </motion.div>
                    )})}
                </motion.div>
              </motion.div>
            </div>
          )
        })}
      
    </div>
  )
}

export default Home