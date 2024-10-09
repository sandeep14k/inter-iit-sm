import React from "react";
import "../css/gallery.css"

const images = [
  "/gallery/cricket1.jpg",
  "/gallery/IMG_7606.JPG",
  "/gallery/IMG_7798.JPG",
  "/gallery/IMG_7852.JPG",
  "/gallery/IMG_8695.JPG",
  "/gallery/IMG_8806.JPG",
];

const MasonryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">

      
      <div class="bg">
        <h1>IISM'24</h1>
      </div>
      {images.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <div class="nft">
            <div class='main'>
              <img class='tokenImage' src={src} alt="NFT" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
