// import React, { useState, useEffect } from "react";
// import {GetParentImages} from "./Images";

import { useEffect, useState } from "react";
import { GetParentImages } from "./Images";
import Image from "./interface/image";

// const Carousel=()=>
// {
//     const [currentIndex, setCurrentIndex] = useState(0); 
//     const images = GetParentImages(); 
//     const nextImage = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
//     };

//     useEffect(() => {
//         const intervalId = setInterval(nextImage, 3000); 
//         return () => clearInterval(intervalId);
//     }, [images]); 
// return(
// <div id="projects" className="carousel">
// <div className="carousel-item">
// <img src={`http://localhost:3000/${(images[currentIndex]).path}`} 
// alt={`Project ${currentIndex + 1}`} />
// </div>
// </div>
// )
// }
// export default Carousel
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
     const fetchImages = async () => {
       const fetchedImages = await GetParentImages();
       setImages(fetchedImages);
     };
     fetchImages();
   }, []);
 


    useEffect(() => {
        const handleResize = () => {
            setCurrentIndex(0); // Reset index on resize if needed
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length || 1)); // Avoid division by zero
    };

    useEffect(() => {
        if (images.length > 0) {
            const intervalId = setInterval(nextImage, 3000);
            return () => clearInterval(intervalId);
        }
    }, [images]);

    if (images.length === 0) {
        return <div>Loading images...</div>;
    }

    return (
        <div className="main-container">
        <div id="projects" className="carousel">
            <div className="carousel-item">
             
                <img
                    src={`http://localhost:3000/${images[currentIndex].path}`}
                    alt={`Project ${currentIndex + 1}`}
                />

            </div>
        </div></div>
    );
};

export default Carousel;
