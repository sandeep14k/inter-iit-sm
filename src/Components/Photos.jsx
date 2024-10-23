import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "../firebase"; // Adjust this import based on your file structure
import "../css/photos.css"; // Import your CSS file

const Photos = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // To handle the clicked image
  const imagesPerPage = 12;

  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "gallery")); // Replace with your Firebase collection name
      const fetchedImages = querySnapshot.docs.map((doc) => doc.data());
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

  // Function to handle image click and show modal
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="galleryBody">
        {currentImages.map((el, i) => (
          <div
            key={i}
            className="photo-box"
            style={{ backgroundImage: `url("${el.ImageUrl}")` }}
            onClick={() => handleImageClick(el)} // Handle image click
          >
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

      {/* Modal for magnified image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <div className="modal-content">
            <img src={selectedImage.ImageUrl} alt={selectedImage.title} className="modal-image" />
            <div className="modal-title">{selectedImage.title}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Photos;
