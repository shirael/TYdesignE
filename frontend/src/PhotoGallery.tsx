import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { GetChildImages, GetImage } from './Images';
import UploadPoject from './upload';
import { useEffect, useCallback } from "react";
import e from 'express';
interface Image {
  id: number;
  path: string;
  name: string;
}

const PhotoGallery = () => {
  const location = useLocation();
  const { url } = (location.state as { url: string }) || {}; // Type assertion for state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    currentIndex: number | null;
  }>({ isOpen: false, currentIndex: null });
  const [refreshKey, setRefreshKey] = useState(0); // מפתח רענון
  const { imageId } = useParams();
  const images = GetChildImages(Number(imageId), refreshKey);
  const mainImage = GetImage(Number(imageId));
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };


  const openLightbox = (index: number) => {
    setLightbox({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = useCallback(() => {
    setLightbox({ isOpen: false, currentIndex: null });
  }, []);

  const showNextImage = useCallback(() => {
    setLightbox((prev) => {
      if (prev.currentIndex === null) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % images.length,
      };
    });
  }, [images.length]);

  const showPrevImage = useCallback(() => {
    setLightbox((prev) => {
      if (prev.currentIndex === null) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex - 1 + images.length) % images.length,
      };
    });
  }, [images.length]);

  const handleUploadSuccess = () => {
    setRefreshKey((prevKey) => prevKey + 1); // מעדכן את המפתח
  };
  const shouldDisplayUpload = url === 'protected';

  // שימוש בחיצי המקלדת
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPrevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox.isOpen, showNextImage, showPrevImage]);


  return (
    <div>


      {shouldDisplayUpload && <UploadPoject id={imageId} onUploadSuccess={handleUploadSuccess} />}
      <div className="top-section">
        <img
          src={`http://localhost:3000/${mainImage?.path}`}
          alt={mainImage?.name}
          className="top-image" />
        <h1 className="top-text">{mainImage?.title}</h1>
        <p style={{
          fontSize: "18px",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          lineHeight: "1.6",
          maxWidth: "600px",
          margin: "20px auto",
          color: "#333",
          whiteSpace: "pre-line"
        }}>
          {mainImage?.text}
        </p>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img
              src={`http://localhost:3000/${image.path}`}
              alt={image.name}
              className="gallery-image"
            />
          </div>
        ))}

        {/* Lightbox Overlay */}
        {lightbox.isOpen && lightbox.currentIndex !== null && (
          <div className="lightbox-overlay active" onClick={closeLightbox}>
            <img
              src={`http://localhost:3000/${images[lightbox.currentIndex].path}`}
              alt={images[lightbox.currentIndex].name}
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()} // מונע סגירה כשבוחרים בתמונה עצמה
            />
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            {/* <button className="lightbox-zoom" onClick={(e) => {
            e.stopPropagation(); //כדי לא לסגור את הלייטבוקס בטעות
            setIsZoomed((prev) => !prev); //Toggle
          }}
          >
            🔍
          </button> */}
            <button className="lightbox-prev" onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}>
              ‹
            </button>
            <button className="lightbox-next" onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}>
              ›
            </button>
          </div>
        )}
      </div></div>
  );
};

export default PhotoGallery;
