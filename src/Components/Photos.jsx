import React from 'react'

const Photos = () => {
  return (
    <div className='galleryBody'>
        <div className="bg"><h1>IISM'24</h1></div>
        <div className="galleryHeading"><h1>GALLERY</h1></div>
        <div className="galleryContainer">
        <div id="item1" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/basketball1.jpg"/>
          <img className="imageItem" src="../gallery/cricket1.jpg"/>
        </div>
        <div id="item2" className="galleryItem"><img className="middleImage" src="../gallery/iism23.jpg"/></div>
        <div id="item3" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/volleyball1.jpg"/>
          <img className="imageItem" src="../gallery/sprint1.jpg"/>
        </div>
        <div id="item4" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/swimming1.jpg"/>
          <img className="imageItem" src="../gallery/marathon1.jpg"/>
        </div>
        <div id="item5" className="galleryItem"><img className="middleImage" src="../gallery/football1.jpg"/></div>
        <div id="item6" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/cricket2.jpg"/>
          <img className="imageItem" src="../gallery/tennis1.jpg"/>
        </div>
        <div id="item7" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/swimming2.jpg"/>
          <img className="imageItem" src="../gallery/badminton1.jpg"/>
        </div>
        <div id="item8" className="galleryItem"><img className="middleImage" src="../gallery/football2.jpg"/></div>
        <div id="item9" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/hockey1.jpg"/>
          <img className="imageItem" src="../gallery/chess1.jpg"/>
        </div>
        <div id="item10" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/squash1.jpg"/>
          <img className="imageItem" src="../gallery/discuss1.jpg"/>
        </div>
        <div id="item11" className="galleryItem"><img className="middleImage" src="../gallery/cricket3.jpg"/></div>
        <div id="item12" className="galleryItem sideItems">
          <img className="imageItem" src="../gallery/tt1.jpg"/>
          <img className="imageItem" src="../gallery/weightlift1.jpg"/>
        </div>
      </div>
    </div> 
  )
}

export default Photos