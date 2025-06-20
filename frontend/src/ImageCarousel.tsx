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
  const text = `שטח נדלני בישראל, זו אחת ההשקעות היקרות יותר.
עיצוב פנים זהיר ימצא לכם מטרים עודפים או יתן אשליית מרחבים.
עיצוב פנים חובבני עלול לקחת את החלל היקר שלכם,
ולהפסיד לכם נתחים ממנו.


זו הסיבה שבאתם לכאן.
כדי למצוא תכנון אדריכלי אכפתי,
ועיצוב פנים שעושה פלאים.
תוכלו לסמוך עלינו בעיניים עצומות, ולפתוח רק כשהכול מושלם.
לחיים!


כאן המשפטים אמור להיות קישורים פעילים לעמודים באתר
יש לך שטח מסחרי שחייב ליצור חווית קניה ולמגנט לקוחות?
רכשתם דירה ואתם חולמים על בית רחב מהמגזינים?

חכם שבאתם לכאן!
 מוזמנים >>>
`;
  const LINKS = [
    {
      text: "יש לך שטח מסחרי שחייב ליצור חווית קניה ולמגנט לקוחות?",
      href: "/commercial",
    },
    {
      text: "רכשתם דירה ואתם חולמים על בית רחב מהמגזינים?",
      href: "/residential",
    },
  ];
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
  const lines = text.split("\n");

  return (
    <div className="main-container">

      <div className="carousel">
        {/* <div className="carousel-text">
<p><strong>שטח נדל"ני בישראל, זו אחת ההשקעות היקרות יותר. <br /></strong>
עיצוב פנים זהיר ימצא לכם מטרים עודפים או יתן אשליית מרחבים. <br />
עיצוב פנים חובבני עלול לקחת את החלל היקר שלכם, <br />
ולהפסיד לכם נתחים ממנו. <br /><br />

</p>
<p>
<strong>זו הסיבה שבאתם לכאן.</strong> <br />
כדי למצוא תכנון אדריכלי אכפתי, <br />
ועיצוב פנים שעושה פלאים. <br />
תוכלו לסמוך עלינו בעיניים עצומות, ולפתוח רק כשהכול מושלם. <br />
<strong>לחיים!</strong> <br />

</p>
  <br />

  <p>
    <a href="/commercial">יש לך שטח מסחרי שחייב ליצור חווית קניה ולמגנט לקוחות?</a><br />
    <a href="/residential">רכשתם דירה ואתם חולמים על בית רחב מהמגזינים?</a>
  </p>

  <br />

  <p><strong>חכם שבאתם לכאן!</strong><br />
  <strong> מוזמנים &gt;&gt;&gt;</strong></p>

</div> */}


  
</div>

        <div className="carousel-img">
          <img
   src={`https://tydesigne-backend.onrender.com/${images[currentIndex].path}`}            alt={`Project ${currentIndex + 1}`}
          />
          <div className="wrap-text">
    <div className="text">
      <p>שטח נדל&quot;ני בישראל, זו אחת ההשקעות היקרות יותר.<br/>
      עיצוב פנים זהיר ימצא לכם מטרים עודפים או יתן אשליית מרחבים.<br/>
      עיצוב פנים חובבני עלול לקחת את החלל היקר שלכם, ולהפסיד לכם נתחים ממנו.<br/><br/>
      זו הסיבה שבאתם לכאן.<br/>
      כדי למצוא תכנון אדריכלי אכפתי, ועיצוב פנים שעושה פלאים.<br/>
      תוכלו לסמוך עלינו בעיניים עצומות, ולפתוח רק כשהכול מושלם.<br/><br/>
      <a href="/commercial">יש לך שטח מסחרי שחייב ליצור חווית קניה ולמגנט לקוחות?</a><br/>
      <a href="/residence">רכשתם דירה ואתם חולמים על בית רחב מהמגזינים?</a><br/><br/>
      <strong>חכם שבאתם לכאן!</strong><br/>
      <a href="/contact">מוזמנים&gt;&gt;&gt;</a>
      </p>
    </div>
  </div>
        </div>


      </div>

  );
};

export default Carousel;
