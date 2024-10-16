import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase"; // Adjust this import based on your file structure
import "../css/photos.css"; // Import your CSS file

const Photos = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery")); // Replace with your Firebase collection name
      const fetchedImages = querySnapshot.docs.map((doc) => doc.data());
      console.log(fetchedImages);
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const nextPage = () => {
    if (currentPage < Math.ceil(images.length / imagesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div className="galleryBody">
      {currentImages.map((el, i) => (
        <div key={i} className="photo-box" style={{ backgroundImage: `url("${el.ImageUrl}")` }}>
          <div className="photo-title">{el.title}</div>
        </div>
      ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(images.length / imagesPerPage)}>
          Next
        </button>
      </div>
    </>
  );
};

export default Photos;
