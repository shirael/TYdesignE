// import React, { useState, useEffect } from 'react';
// import FormComponent from './FormComonent';

// const HomePage = () => {
//     const [currentIndex, setCurrentIndex] = useState(0); // מצב התמונה הנוכחית
//     const images = [
//         // "/8fa3a708f140f77b90affa8697a39ed5.jpg",
//         "/4-1.jpg",
//      "/h2.jpg"
//     ]; // רשימת התמונות

//     // פונקציה שמעדכנת את התמונה הנוכחית
//     const nextImage = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // מחזור בין התמונות
//     };

//     // אפקט שיופעל כשמוצג הרכיב ויעדכן את התמונה כל 3 שניות
//     useEffect(() => {
//         const intervalId = setInterval(nextImage, 3000); // 3000 מילישניות = 3 שניות

//         // ניקוי של ה-interval כשנפנים מהרכיב
//         return () => clearInterval(intervalId);
//     }, []); // [] אומר שהאפקט ירוץ פעם אחת כאשר הרכיב ייטען

//     return (
//         <div>
//             {/* תפריט ניווט */}
//             <nav className="navbar">
//                 <div className="logo">
//                     <a href="#">לוגו</a>
//                 </div>
//                 <ul className="nav-links">
//                     <li><a href="#home">דף ראשי</a></li>
//                     <li><a href="#projects">פרויקטים</a></li>
//                     <li><a href="#about">אודות</a></li>
//                     <li><a href="#contact">צור קשר</a></li>
//                 </ul>
//             </nav>

//             {/* קרוסלה של פרויקטים */}
//             <div id="projects" className="carousel">
//                 <div className="carousel-item">
//                     <img src={images[currentIndex]} alt={`פרויקט ${currentIndex + 1}`} />
//                 </div>
//             </div>

//             {/* קצת עלי */}
//             <section id="about">
//                 <h2>קצת עלי</h2>
//                 <img src="designer.jpg" alt="המעצבת" className="designer-image" />
//                 <p>המעצבת שתעזור לך לעצב את הבית שלך בצורה מושלמת.</p>
//             </section>

//             {/* טופס יצירת קשר
//             <section id="contact">
//     <div className="contact-container">
//         <h2>בואו להגשים חלום</h2>
//         <form id="contact-form">
//             <div className="input-group">
//                 <p className="required-field">שדה חובה</p>
//                 <input type="text" name="name" placeholder="שם מלא" required />
//             </div>
//             <div className="input-group">
//                 <p className="required-field">שדה חובה</p>
//                 <input type="tel" name="phone" placeholder="טלפון" required />
//             </div>
//             <input type="email" name="email" placeholder="אימייל" required />
//             <textarea name="message" placeholder="ההודעה שלך"></textarea>
//             <button type="submit">צרו איתי קשר</button>
//         </form>
//     </div>
// </section> */}
// <FormComponent></FormComponent>
//         </div>
//     );
// };

// export default HomePage;
import React, { useState, useEffect } from 'react';
import FormComponent from './FormComponent';
import Carousel from './ImageCarousel';
import Gallery from './ProjectsGallery'
import UploadProject from './upload';
import NavBar from './Nav'
import About from './about'
import Footer from './Footer';
const HomePage = () => {
    return (
        <div>

         {/* <NavBar></NavBar>  */}
      <Carousel></Carousel>
{/* <UploadProject></UploadProject> */}
        
<About></About>
<Gallery myurl=''></Gallery>
       
<FormComponent></FormComponent>
{/* <Footer></Footer> */}
        </div>
    );
};

export default HomePage;
