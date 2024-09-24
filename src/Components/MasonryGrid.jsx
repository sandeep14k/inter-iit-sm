import React from "react";

const images = [
  "../../public/gallery/IMG_0308.JPG",
  "../../public/gallery/IMG_7606.JPG",
  "../../public/gallery/IMG_7798.JPG",
  "../../public/gallery/IMG_7852.JPG",
  "../../public/gallery/IMG_8695.JPG",
  "../../public/gallery/IMG_8806.JPG",
];

const MasonryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
      {images.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img src={src} alt="#" className="w-full object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;