import React from 'react'
import "../css/photos.css"

const Photos = () => {
  let images = [
    {url:"/gallery/badminton1.jpg", title:"Example Title"},
    {url:"/gallery/cricket1.JPG", title:"Example Title"},
    {url:"/gallery/discuss1.jpg", title:"Example Title"},
    {url:"/gallery/hockey1.jpg", title:"Example Title"},
    {url:"/gallery/sprint1.JPG", title:"Example Title"},
    {url:"/gallery/swimming2.JPG", title:"Example Title"},
    {url:"/gallery/volleyball1.jpg", title:"Example Title"},
    {url:"/gallery/basketball1.jpg", title:"Example Title"},
    {url:"/gallery/cricket2.JPG", title:"Example Title"},
    {url:"/gallery/football1.JPG", title:"Example Title"},
    {url:"/gallery/iism23.JPG", title:"Example Title"},
    {url:"/gallery/squash1.jpg", title:"Example Title"},
    {url:"/gallery/tennis1.JPG", title:"Example Title"},
    {url:"/gallery/weightlift1.jpg", title:"Example Title"},
    {url:"/gallery/chess1.jpg", title:"Example Title"},
    {url:"/gallery/cricket3.jpg", title:"Example Title"},
    {url:"/gallery/football2.JPG", title:"Example Title"},
    {url:"/gallery/marathon1.jpg", title:"Example Title"},
    {url:"/gallery/swimming1.jpg", title:"Example Title"},
    {url:"/gallery/tt1.jpg", title:"Example Title"},
  ];

  return (
    <div className='galleryBody'>
      {
        images.map((el,i)=>
          <div className='photo-box' style={{backgroundImage:`url("${el.url}")`}} ><div className='photo-title'>{el.title}</div></div>
        )
      }
          
    </div>
  )
}

export default Photos