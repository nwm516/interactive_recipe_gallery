import React, { useState } from 'react';
import { images } from './imageList'; // Importing the image list

const RecipeCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // If nextIndex is equal to the index of the last image, "Next" button click will wrap to first image (index 0).
  // Otherwise, will increment to the next image.
  const handleNext = () => {
    setCurrentIndex((nextIndex) => (nextIndex === images.length - 1 ? 0 : nextIndex + 1))
  }

  // If prevIndex is equal to 0, "Previous" button click will wrap to the last image.
  // Otherwise, will increment down by one index.
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <img src={images[currentIndex].url} alt={images[currentIndex].description} />
        <p>{images[currentIndex].description}</p>
      </div>
    </div>
  )
}

export default RecipeCard
