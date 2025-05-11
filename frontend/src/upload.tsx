
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface UploadProjectProps {
//   id?: string | null;
//   onUploadSuccess?: () => void; // Function to call after successful upload
// }

// const UploadProject = ({ id = null, onUploadSuccess }: UploadProjectProps) => {
//   console.log("iamhere!!!!!!!!!!!!!!")
//   const navigate = useNavigate();
//   // const currentUrl = window.location.href;

//   const [images, setImages] = useState<File[]>([]); // State for multiple files
// const [text, setText] = useState(""); // State to hold the entered text
// const [title, setTitle] = useState(""); // State to hold the entered text

//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files) {
//       setImages(Array.from(files)); // Convert FileList to Array and store
//     }
//   };
//   const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setTitle(event.target.value); // Convert FileList to Array and store
//   };

//   const handleTextChange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     const x = event.target.value;
//     if (x) {
//       setText(String(x))
//     }
//   }
//     const handleUpload = async () => {
//       if (images.length === 0) {
//         alert('Please select at least one image to upload');
//         return;
//       }
//       if (title === "") {
//         alert('Please add title');
//         return;
//       }

//       if (text === "") {
//         alert('Please add text');
//         return;
//       }
//       const formData = new FormData();
//       images.forEach((image) => formData.append('images', image)); // Append all images
//       if (id) {
//         formData.append('parentId', id);
//       }
//       else {
//         formData.append('title', title)

//         formData.append('text', text)
//       }

//       try {
//         const response = await fetch('http://localhost:3000/upload', {
//           method: 'POST',
//           body: formData,
//         });

//         if (response.ok) {

//           alert('Images uploaded successfully!');
//           setImages([]); // Reset selected images
//           const newParentId = id ?? (await response.json()).parentId; // קחי את ID מהשרת אם אין

//           navigate(`/PhotoGallery/${newParentId}`, { state: { url: currentUrl } });
//           if (onUploadSuccess) onUploadSuccess(); // Call callback if provided
//         } else {
//           throw new Error('Failed to upload images');
//         }
//       } catch (error) {
//         console.error('Error uploading images:', error);
//         alert('Failed to upload images');
//       }
//     };



//     return (
//       <div>
//         <h1>Upload Images</h1>
//         <input type="file" onChange={handleImageChange} multiple={!!id} />
//         <button onClick={handleUpload}>Upload Images</button>
//         <input type="text" onChange={handleTitleChange} />

//         <textarea
//           value={text}
//           onChange={handleTextChange}
//           placeholder="Enter your long text here..."
//           rows={8}  // Defines the number of visible lines (height)
//           cols={50} // Defines the width of the textarea
//           style={{
//             padding: '10px',
//             border: '1px dashed #ccc',
//             width: '100%',
//             fontSize: '16px',
//             resize: 'vertical', // Allows the user to resize the textarea vertically
//           }}
//         />
//         {images.length > 0 && (
//           <div>
//             <h3>Selected Images:</h3>
//             <ul>
//               {images.map((image, index) => (
//                 <li key={index}>{image.name}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   };

//   export default UploadProject;
import { upload } from '@testing-library/user-event/dist/upload';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UploadProjectProps {
  id?: string | null;
  onUploadSuccess?: () => void;
}

const UploadProject = ({ id = null, onUploadSuccess }: UploadProjectProps) => {
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState<File | null>(null); // State for the main image
  const [images, setImages] = useState<File[]>([]); // State for additional images (children)
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  // Handle main image change
  const handleMainImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length === 1) {
      setMainImage(files[0]);
    } else {
      alert('Please select one image for the main image');
    }
  };

  // Handle additional image change (children)
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setImages(Array.from(files));
    }
  };

  // Handle title input change
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // Handle text input change
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleUpload = async () => {
    if (!mainImage) {
      alert('Please select a main image');
      return;
    }
    if (images.length === 0) {
      alert('Please select at least one child image to upload');
      return;
    }
    if (title === "") {
      alert('Please add title');
      return;
    }
    if (text === "") {
      alert('Please add text');
      return;
    }

    const formData = new FormData();
    formData.append('mainImage', mainImage); // Append main image
    images.forEach((image) => formData.append('images', image)); // Append additional images (children)
    
    if (id) {
      formData.append('parentId', id);
    } else {
      formData.append('title', title);
      formData.append('text', text);
    }

    try {
     console.log("try to upload")
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Images uploaded successfully!');
        setMainImage(null);
        setImages([]);

        const newParentId = id ?? (await response.json()).parentId;
        navigate(`/PhotoGallery/${newParentId}`, { state: { url: 'protected' } });

        if (onUploadSuccess) onUploadSuccess();
      } else {
        throw new Error('Failed to upload images');
      }
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Failed to upload images');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>העלאת תמונות</h1>

      {/* Main Image (one image) */}
      <label>בחר תמונה ראשית:</label><br />
      <input type="file" onChange={handleMainImageChange} /><br /><br />

      {/* Additional Images (children) */}
      <label>בחר תמונות נוספות:</label><br />
      <input type="file" onChange={handleImageChange} multiple /><br /><br />

      {/* Title Input */}
      <label>כותרת:</label><br />
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="הכנס כותרת"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      /><br />

      {/* Text Input */}
      <label>פסקה:</label><br />
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="כתוב את הפסקה שלך כאן..."
        rows={8}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px dashed #ccc',
          fontSize: '16px',
          resize: 'vertical',
          marginBottom: '15px',
        }}
      /><br />

      {/* Upload Button */}
      <button onClick={handleUpload} style={{ padding: '10px 20px', fontSize: '16px' }}>
        העלה את כל התמונות
      </button>

      {/* Display selected images */}
      {mainImage && (
        <div style={{ marginTop: '20px' }}>
          <h3>תמונה ראשית שנבחרה:</h3>
          <p>{mainImage.name}</p>
        </div>
      )}
      {images.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>תמונות נוספות שנבחרו:</h3>
          <ul>
            {images.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadProject;
