import React, {useEffect, useState} from "react";
import "../css/expand.css";
import "../css/bar.css";
import { Link } from "react-router-dom";
import Explore from "./Explore";
import PostData from "./../db.json"

const Input = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate')
    }
  }

  return <input type="text" onKeyDown={handleKeyDown} />
}


const Bar = (props) => {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    getWeather()
   }, [lat,long])

   function getWeather(){
    const fetchData = async () => {
      setLat(PostData.position.lat);
      setLong(PostData.position.long);

      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_WEATHER_APY_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
   }

  return (
    <div className={`exploreScreen ${props.isExpanded ? 'exploreScreen-active' : 'exploreScreen-deactive'}`}>
        <div className="barScreen">
          {/* <div className="rightCnt">
            <div className="menuBurger"></div>
            <div className="searchBox"></div>
          </div> */}
          <div className="centerCnt">{ props.title }</div>
          <div className="leftCnt">
            {/* <div className="divider"></div> */}
            <div className="expBtn">
              <div className="expTempData">
              {(typeof data.main != 'undefined') ? (
                <div className="tempData">
                  <div><p>Temaperatura: {data.main.temp}°C</p></div>
                  <div><p>Se simte ca: {data.main.feels_like}°C</p></div>
                  <div><p>Umiditate: {data.main.humidity}</p></div>
                </div>
              ): (
                <div></div>
              )}
              </div>
              <div>
                {props.isExpanded ? <Link to="/">Close</Link> : <Link to="/explore">Open</Link>}
              </div>
            </div>
          </div>
        </div>
        <Explore pageView={props.pageView}/>
    </div>
  )
}

Bar.defaultProps = {
  title: 'Sighisoara',
  pageView: false
}

export default Bar