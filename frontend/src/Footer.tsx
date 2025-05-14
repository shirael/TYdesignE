
import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        {/* Left Section: Copyright */}
   <Typography variant="body2" className="footer-text">
        תמר ויעל&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;אדריכלות // עיצוב פנים // סטיילינג
     </Typography>
        <Typography variant="body2" className="footer-text">
          ty.design4u@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;058-3229251&nbsp;&nbsp;|&nbsp;&nbsp;050-4188706
        </Typography>

        {/* Right Section: Links */}
        <Box className="footer-links">
          <Link href="/AboutSection" className="footer-link">
            אודות
          </Link>
          <Link href="/FileUploadForm" className="footer-link">
            צור קשר
          </Link>
          <Link href="/" className="footer-link">
            דף ראשי
          </Link>
          <Link href="/ProjectsGallery" className="footer-link">
            פרויקטים נבחרים
          </Link>
        </Box>
      </footer>
    </div>
  );
};

export default Footer;
