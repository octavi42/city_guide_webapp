import React from 'react'
import "../css/place.css"
import { Link, useParams } from 'react-router-dom';
import PostData from "../db.json"


function renderPage (pageId) {
  // PostData.posts.map((postDetail)=>{
  //   if (postDetail.id==pageId){
  //     return <div>
  //       <h1 className='placeTitle'>{postDetail.title}</h1>
  //       <div className='placeImgDiv'></div>
  //       <div className='pageControl'></div>
  //       <p>{postDetail.description}</p>
  //     </div>
  //   } else return <div>gsd</div>
  // })
  // return <div>{PostData.posts[2].title}</div>

  var objj = <div>sladkj</div>
  var gef = false

  PostData.posts.map((postDetail)=>{
    if (postDetail.id==pageId){
      objj = <div>
        <h1 className='placeTitle'>{postDetail.title}</h1>
        <div className='placeImgDiv'>
          <img src={postDetail.mainImg} />
        </div>

        {/* <Link to={"/map/point/" + postDetail.id}>sdasjkh</Link> */}
        {/* <div className='pageControl'></div> */}
        <p className='placeDescription'>{postDetail.description}</p>
      </div>
      gef = true
    }
  })
  
  if (gef) return objj
  return <div><h1>Page Not Found</h1></div>

}

function renderSuggestions() {

  let nrs = getRandomInt(PostData.posts.length-1, 4)
  console.log(nrs);

  return <div className='pageSuggest'>
    <div><Link to={"/explore/place/"+ (nrs[0])}><p>{PostData.posts[(nrs[0]-1)].title}</p><img src={PostData.posts[(nrs[0]-1)].mainImg}/></Link></div>
    <div><Link to={"/explore/place/"+ (nrs[1])}><p>{PostData.posts[(nrs[1]-1)].title}</p><img src={PostData.posts[(nrs[1]-1)].mainImg}/></Link></div>
    <div><Link to={"/explore/place/"+ (nrs[2])}><p>{PostData.posts[(nrs[2]-1)].title}</p><img src={PostData.posts[(nrs[2]-1)].mainImg}/></Link></div>
    <div><Link to={"/explore/place/"+ (nrs[3])}><p>{PostData.posts[(nrs[3]-1)].title}</p><img src={PostData.posts[(nrs[3]-1)].mainImg}/></Link></div>
  </div>  

}

// function getRandomInt(max) {
//   let nr = Math.floor(Math.random() * max);
//   console.log(r1,r2,r3,r4);
//   if (nr!=r1!=r2!=r3!=r4) {
//     return nr;
//   } else {
//     getRandomInt(max)
//   }
// }

function getRandomInt(max, gen) {
  var arr = [];
  while(arr.length < gen){
      var r = Math.floor(Math.random() * max) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr
}

const Place = () => {

  let { pageId } = useParams();

  return (
    <div className='places'>
      {renderPage(pageId)}
      {renderSuggestions()}
    </div>
  )
}

export default Place