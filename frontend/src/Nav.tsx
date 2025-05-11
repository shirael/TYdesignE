// import React from "react";
// import { useNavigate } from "react-router-dom";

// const NavBar: React.FC = () => {
//    const navigate = useNavigate();
//    const handleImageClick = (id: string) => {
    
//     navigate(`/${id}`);
//   };
//   return (
//     <div className="formContainer">
//     <nav className="navbar">
//       <ul className="navbar-links">
//         <li onClick={() => handleImageClick("")}>דף ראשי</li>
//         <li onClick={() => handleImageClick("ProjectsGallery")}>פרויקטים</li>
//         <li onClick={() => handleImageClick("AboutSection")}>אודות</li>
//         <li onClick={() => handleImageClick("FileUploadForm")}>צור קשר</li>
//       </ul>
//     </nav>
//     </div>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {

    navigate(`/${path}`);
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <div className="main-container">
      <nav className="navbar">
       

        {/* Hamburger menu toggle button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Links */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li onClick={() => handleNavigation("")}>ראשי</li>
          <li onClick={() => handleNavigation("AboutSection")}>אודות</li>
          <li onClick={() => handleNavigation("ProjectsGallery")}>פרויקטים נבחרים</li>



          <li onClick={() => handleNavigation("FileUploadForm")}>צור קשר</li>
{/* 
          <li onClick={() => handleImageClick("")}>דף ראשי</li>
        <li onClick={() => handleImageClick("ProjectsGallery")}>פרויקטים</li>
         <li onClick={() => handleImageClick("AboutSection")}>אודות</li>
        <li onClick={() => handleImageClick("FileUploadForm")}>צור קשר</li> */}
        </ul>
        <div className="logo" onClick={() => handleNavigation("")}>
          TYDESIGN
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
