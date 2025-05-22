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
  const htmlString = `
שטח נדל"ני בישראל, זו אחת ההשקעות היקרות יותר.<br/>
עיצוב פנים זהיר ימצא לכם מטרים עודפים או יתן אשליית מרחבים.<br/>
עיצוב פנים חובבני עלול לקחת את החלל היקר שלכם,<br/>
ולהפסיד לכם נתחים ממנו.<br/><br/>

זו הסיבה שבאתם לכאן.<br/>
כדי למצוא עיצוב פנים חכם שאכפת לו מכל ס"מ שהשקעתם<br/>
ותוכלו לסמוך עליו בעיניים עצומות.<br/><br/>

<a href="/commercial">יש לך שטח מסחרי שחייב ליצור חווית קניה ולמגנט לקוחות?</a><br/>
<a href="/residential">רכשתם דירה ואתם חולמים על בית רחב מהמגזינים?</a><br/><br/>

חכם שבאתם לכאן!<br/>
מוזמנים >>>
`;
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
            const intervalId = setInterval(nextImage, 3500);
            return () => clearInterval(intervalId);
        }
    }, [images]);

    if (images.length === 0) {
        return <div>Loading images...</div>;
    }

    return (
        <div className="main-container">
   
  <div className="carousel">
     <div className="carousel-text">
    <div
      className="exact-lines"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  </div>


    <div className="carousel-img">
      <img
        src={``https://tydesigne-backend.onrender.com/${images[currentIndex].path}`}
        alt={`Project ${currentIndex + 1}`}
      /> 
       </div>
      

</div>
</div>
    );
};

export default Carousel;
