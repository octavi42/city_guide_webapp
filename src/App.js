import React, {useEffect, useState} from 'react';
import "./css/global.css";
import Map from "./components/Map"
import Bar from './components/Bar';
import ErrorPage from './components/ErrorPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { AnimatePresence } from 'framer-motion';

const centerMap = {
  lat: 46.221445,
  lng: 24.790747,
};

function renderHelloWorld() {
  var barHeight = getComputedStyle(document.documentElement).getPropertyValue('--barPop');
  console.log(barHeight)
}

// const location = useLocation()

export default function App() {

  const[placeId, setPlaceId] = useState();

  return <Router>
    <Map placeId={placeId} />
    {/* <Switch> */}
          <Routes>
            {/* <AnimatePresence> */}
              <Route path='/' element={<Bar isExpanded={false}/>}/>
              {/* <Route path='*' element={<ErrorPage/>}/> */}
              <Route path='/err' element={<ErrorPage/>}/>
              <Route path="/explore" element={<Bar isExpanded={true}/>}/>
              <Route path="/explore/:route/:pageId" element={<Bar isExpanded={true} pageView={true}/>}/>
              <Route path="/explore/:route/" element={<Bar isExpanded={true} pageView={true}/>}/>
              {/* <Route path="/map/point/:pointId" element={<Map />}/> */}
              <Route path="/map/point/:pointId" element={<Bar setPlaceId={setPlaceId} isExpanded={false}/>}/>
            {/* </AnimatePresence> */}
          </Routes>
      {/* </Switch> */}
  </Router>
}