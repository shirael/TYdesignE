import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { GetParentImages, DeleteImage } from "./Images";
import Image from "./interface/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface GalleryProps {
  myurl: string;
}

const Gallery: React.FC<GalleryProps> = ({ myurl }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const shouldDisplayUpload = myurl === "protected";

  // Fetch images when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await GetParentImages();
      setImages(fetchedImages);
    };
    fetchImages();
  }, []);
  console.log(images)

  // Navigate to the clicked image
  const handleImageClick = (id: number) => {
    console.log(myurl)
    navigate(`/PhotoGallery/${id}`, { state: { url: myurl } });
  };

  // Handle image delete
  const handleDeleteClick = async (id: number) => {
    const success = await DeleteImage(id);
    console.log(success)
    if (success) {
      setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    } else {
      console.error("Failed to delete image");
    }
  };

  return (
    <div className="main-container">
      <div className="projectGallery">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 4,
            padding: 2,
            "@media (max-width: 900px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
            "@media (max-width: 600px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}
        >
          {images.map((image) => (
                      
              <a href={`/PhotoGallery/${Number(image.id)}`} style={{ textDecoration: 'none' }}>

            <Box
              key={image.id}
              sx={{
                position: "relative",
                // border: "1px solid #ddd",
                borderRadius: 0,
                overflow: "hidden",
                // height: "auto",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                "&:hover .delete-icon": {
                  visibility: "visible",
                  opacity: 1,
                },
                "&:hover img": {
                  transform: "scale(1.2)", // Scale the image when hovered
                },
                "&:hover .overlay": {
                  backgroundColor: "rgba(0, 0, 0, 0.8)", // Change the overlay background color
                  transform: "scale(1.2)", // Optionally scale the overlay as well (if desired)
                },
                "&:hover .caption": {
                  visibility: "visible",        // Make the caption visible on hover
                  opacity: 1,                   // Ensure the caption fades in smoothly
                  transition: "opacity 2s ease-in-out", // Smooth fade-in transition for opacity
                },
              
              }}

            >
              <Box
                component="img"
                src={`http://localhost:3000/${image.path}`}
                alt={image.name}
                sx={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  border: "1px solid #ddd",
                  transition: "transform 2.5s ease-in-out",

                  // "&:hover":{
                  //   transform:"scale(1.2)",
                  // },
                }}
              />

              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  transition: "background-color 2.5s ease",
                  // "&:hover": {
                  //   transform: "scale(1.9)",
                  // },
                }}
              />


              <Typography
                className="caption"
                variant="body2"
                sx={{
                  position: "absolute", 
                  top: "50%",       
                  left: "50%",         
                  transform: "translate(-50%, -50%)", 
                  color: "white",      
                  fontSize: "24px",    
                  fontWeight: "bold",   // Bold text
                  textAlign: "center",  // Center align the text
                  visibility: "hidden", // Initially hidden (before hover)
                  opacity: 0,           // Initially transparent (before hover)
                  transition: "visibility 2s, opacity 2s ease-in-out", // Fade-in effect for visibility
                }}             

              >
                  {image.title}  
                  <br />

                   <span className="project-link" style={{
      textDecoration: 'underline',  // Underline the text
    }}>
      {"לצפיה בפרויקט"}</span>


              </Typography>
             
              {shouldDisplayUpload && (
                <Box
                  className="delete-icon"
                  sx={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    visibility: "hidden",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <DeleteIcon
                    sx={{
                      fontSize: 30,
                      color: "white",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      borderRadius: "50%",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click from propagating
                      handleDeleteClick(image.id);
                    }}
                  />
                </Box>
              )}
            </Box>  
                        </a>

          ))}

        </Box>
      </div>
    </div>
  );
};

export default Gallery;
