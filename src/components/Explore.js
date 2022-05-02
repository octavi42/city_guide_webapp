import {React, useEffect, useRef, useState} from 'react'
import "../css/explore.css"
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import { PageRender } from './PageRender';
import mapImg from './../images/icons/mapIcon.png';
import leftArrow from './../images/icons/leftArrow.png';
import homeIcon from './../images/icons/home.png';
import PostData from './../db.json'

function Explore(props) {

  const midRef = useRef();

  const [searchPlace, setSearchPlace] = useState('')

  useEffect(() => {
    midRef.current.scrollTo(0, 0)
  })

  console.log(props.pageView);

  return (
    <div className='exploreCnt'>
        <div className={` ${props.pageView ? 'side-active' : 'side-deactive'}`}>

          <div className='topCmds'>
            <li><Link to="/explore">
              <div>{props.pageView ? <img className='icon' src={leftArrow} /> : <p>back</p> }</div>
            </Link></li>
            <li><Link to="/">
              <div>{props.pageView ? <img className='icon' src={mapImg} /> : <p>map</p> }</div>
            </Link></li>
            <li><Link to="/explore">
              <div>{props.pageView ? <img className='icon' src={homeIcon} /> : <p>home</p> }</div>
            </Link></li>
          </div>

        </div>
        <div ref={midRef} className={` ${props.pageView ? 'mid-active' : 'mid'}`}>
          <PageRender />
        </div>
        <div className={` ${props.pageView ? 'side-active' : 'side-deactive'}`}>
        <div className={` ${!props.pageView ? 'searchCnt' : 'searchCnt-deactive'}`}>
            <input type="text" placeholder="Search..." onChange={event => {setSearchPlace(event.target.value)}}/>
            <div className='searchBlur'></div>
            <div className='searchRes'>
              {PostData.posts.filter((val) => {
                if (searchPlace == "") {
                  return val
                } else if (val.title.toLowerCase().includes(searchPlace.toLowerCase())) {
                  return val
                }
              }).map((val, key) => {
                return <div><Link to={"/explore/place/" + val.id}><p>{val.title}</p></Link></div>
              })}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Explore