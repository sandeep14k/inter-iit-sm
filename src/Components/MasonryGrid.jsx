import React from "react";
const images = [
  "/square1.jpg",
  "/wide1.jpg",
  "/wide2.jpg",
  "square2.jpg",
  "wide3.jpg",
  "square3.jpg",
];
const MasonryGrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
      {images.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img src={src} className="w-full object-cover rounded-lg" />
        </div>
      ))}
    </div>
  );
};
export default MasonryGrid;