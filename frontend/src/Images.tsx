
// import React, { useState, useEffect } from 'react';
// import Image from './interface/image'

// const GetParentImages = () => {
//     const [images, setImages] = useState<Image[]>([]);
//     useEffect(() => {
//       const fetchImages = async () => {
//         try {
//           const response = await fetch("http://localhost:3000/images/getParentImages", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           setImages(data);
//         } catch (error) {
//           console.error("Error fetching images:", error);
//         }
//       };
//       fetchImages();
//     }, []);
//     return images;
//   };
 



// const GetChildImages = (id: number | undefined) => {
//   const [images, setImages] = useState<Image[]>([]);
//     useEffect(() => {
//       const fetchImages = async () => {
//         try {
//           const response = await fetch(`http://localhost:3000/images/getChildImages/${id}`, {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           console.log(data)
//           setImages(data);
//         } catch (error) {
//           console.error("Error fetching images:", error);
//         }
//       };
//       fetchImages();
//     }, []);
//     return images;
// };
//  export {GetParentImages,GetChildImages};

import React, { useState, useEffect } from 'react';

//  const DeleteImage = async (
//   id: number,
//   setImages?: React.Dispatch<React.SetStateAction<Image[]>>
// ) => {
//   try {
//     const response = await fetch(`http://localhost:3000/api/delete/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       if (setImages) {
//         setImages((prevImages) => prevImages.filter((image) => image.id !== id));
//       }
//       console.log(`Image with ID ${id} deleted successfully.`);
//     } else {
//       console.error("Failed to delete image.");
//     }
//   } catch (error) {
//     console.error("Error deleting image:", error);
//   }
// };

// const GetParentImages = () => {
//     const [images, setImages] = useState<Image[]>([]);
//     useEffect(() => {
//       const fetchImages = async () => {
//         try {
//           const response = await fetch("http://localhost:3000/images/getParentImages", {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           setImages(data);
//         } catch (error) {
//           console.error("Error fetching images:", error);
//         }
//       };
//       fetchImages();
//     }, []);
//     return images;
//   };
 
import Image from "./interface/image";

 const GetParentImages = async (): Promise<Image[]> => {
  try {
    const response = await fetch("http://localhost:3000/images/getParentImages");
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

 const DeleteImage = async (id: number): Promise<boolean> => {
  
  try {
    console.log(id)
    const response = await fetch(`http://localhost:3000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.ok; // Returns true if successful, false otherwise
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
};



const GetChildImages = (id: number | undefined, refreshKey: number) => {
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    if(id === undefined) return;
      const fetchImages = async () => {
        try {
          const response = await fetch(`http://localhost:3000/images/getChildImages/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setImages(data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    }, [id, refreshKey]);
    return images;
};
const GetImage = (id: number ) => {

  const [image, setImage] = useState<Image>();
  useEffect(() => {
      const fetchImages = async () => {
        try {
          const response = await fetch(`http://localhost:3000/images/getImage/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setImage(data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      };
      fetchImages();
    }, [id]);
    console.log(image)
    return image;
};

 export {GetParentImages,GetChildImages,DeleteImage,GetImage};
