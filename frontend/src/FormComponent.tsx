
// const FileUploadForm = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   // const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
//     event.preventDefault();

//     // Clear previous errors
//     setError({
//       name: "",
//       phone: "",
//       email: "",
//       message: "",
//     });

//     let formHasError = false;

//     // Validate fields
//     if (!name) {
//       setError((prev) => ({ ...prev, name: "שדה זה דרוש" }));
//       formHasError = true;
//     }
//     if (!phone) {
//       setError((prev) => ({ ...prev, phone: "שדה זה דרוש" }));
//       formHasError = true;
//     } else if (!isValidPhone(phone)) {
//       setError((prev) => ({ ...prev, phone: "מספר טלפון לא חוקי" }));
//       formHasError = true;
//     }
//     if (email && !isValidEmail(email)) {
//       setError((prev) => ({ ...prev, email: "כתובת אימייל לא חוקית" }));
//       formHasError = true;
//     }

//     if (formHasError) return;

//     setIsSubmitting(true);

//     // Create FormData and append the data
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("phone", phone);
//     formData.append("email", email);
//     formData.append("message", message);

//     try {
//       console.log("gfdg")
//       const response = await axios.post("http://localhost:3000/upload/send-email/", formData, {
//         method: 'POST',
//         // body: formData,
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Form submitted successfully:", response.data);
//       alert("הטופס נשלח בהצלחה!");
//       // Clear the form
//       setName("");
//       setPhone("");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("שליחת הטופס נכשלה. נסה שוב מאוחר יותר.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <div className="main-container">
// <div className="formContainer">
//     <Box className="form-wrapper">
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       className="form-container"
//       noValidate
//       autoComplete="off"
//     >
//       <Box className="form-group">
//         <TextField
//           id="name"
//           type="text"
//           required
//           fullWidth
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           error={!!error.name}
//           helperText={error.name}
//           placeholder="שם"
//           aria-label="שם"
//           className="input-field"
//         />
//         <TextField
//           id="phone"
//           type="tel"
//           required
//           fullWidth
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           error={!!error.phone}
//           helperText={error.phone}
//           placeholder="מספר נייד"
//           aria-label="מספר נייד"
//           className="input-field"
//         />
//         <TextField
//           id="email"
//           type="email"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           error={!!error.email}
//           helperText={error.email}
//           placeholder="אימייל"
//           aria-label="אימייל"
//           className="input-field"
//         />
//         <TextField
//           id="message"
//           multiline
//           rows={6}
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="ההודעה שלך:"
//           fullWidth
//           aria-label="ההודעה שלך"
//           className="input-field"
//         />
//       </Box>
  
//       <Button
//         variant="contained"
//         type="submit"
//         className="submit-button"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? "טוען..." : "צור איתי קשר"}
//       </Button>
//     </Box>
//   </Box>
  
// </div></div>
//   );
// };


// export default FileUploadForm;
import React, { useEffect, useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import {  Button, Box, Typography } from "@mui/material";
import axios from "axios";
import "./index.css";

const FileUploadForm = () => {



const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;

    if (!videoEl) return;

    const observer = new IntersectionObserver(
       ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.pause();         // עוצר אותו אם נתקע
          videoEl.currentTime = 0; // מחזיר להתחלה מיד
          videoEl.play();          // מנגן מיד
        } else {
          videoEl.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(videoEl);

    return () => observer.disconnect();
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({ name: "", phone: "", email: "", message: "" });

    let formHasError = false;

    if (!name) {
      setError((prev) => ({ ...prev, name: "שדה זה דרוש" }));
      formHasError = true;
    }
    if (!phone) {
      setError((prev) => ({ ...prev, phone: "שדה זה דרוש" }));
      formHasError = true;
    } else if (!isValidPhone(phone)) {
      setError((prev) => ({ ...prev, phone: "מספר טלפון לא חוקי" }));
      formHasError = true;
    }
    if (email && !isValidEmail(email)) {
      setError((prev) => ({ ...prev, email: "כתובת אימייל לא חוקית" }));
      formHasError = true;
    }

    if (formHasError) return;

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await axios.post("http://localhost:3000/upload/send-email/", formData);
      alert("הטופס נשלח בהצלחה!");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("שליחת הטופס נכשלה. נסה שוב מאוחר יותר.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const words = ["סלון","מטבח", "חנות","משרד", "בית", "חדר"];
const [word, setWord] = useState("");
const [currentIndex, setCurrentIndex] = useState(0);
const [currentCharIndex, setCurrentCharIndex] = useState(0);
const [isTyping, setIsTyping] = useState(true); // true = typing, false = deleting

  useEffect(() => {
  const currentWord = words[currentIndex];

  // שלב כתיבה
  if (isTyping) {
    if (currentCharIndex < currentWord.length) {
      const typingTimeout = setTimeout(() => {
        setWord((prev) => prev + currentWord[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(typingTimeout);
    } else {
      // אחרי שסיים להקליד – המתנה ואז עובר למחיקה
      const pauseTimeout = setTimeout(() => {
        setIsTyping(false); // מעבר לשלב מחיקה
      }, 2000);

      return () => clearTimeout(pauseTimeout);
    }
  } 
  // שלב מחיקה
  else {
    if (currentCharIndex > 0) {
      const deletingTimeout = setTimeout(() => {
        setWord((prev) => prev.slice(0, -1)); // מוחק אות אחרונה
        setCurrentCharIndex((prev) => prev - 1);
      }, 100);

      return () => clearTimeout(deletingTimeout);
    } else {
      // סיים למחוק → למילה הבאה
      setIsTyping(true);
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }
  }
}, [currentCharIndex, isTyping, currentIndex]);


  return (


    
    <div className="main-container">
          <div className="form-container">
     <div className="all-form"> 
   
      <div className="form">
      {/* <p className="form-text">{sentence}</p> */}
 

      <p className="form-text">
      בואו לשפץ את ה<span>{word}</span>{/* The word will change inside the span */}
      <span className="cursor">| </span>  {/* This represents the cursor */} 
       שלכם</p>


        {/* <div className="formFields"> */}
    <Box className="form-card">
      {/* <Typography variant="h5" className="form-heading">
        צור קשר
      </Typography> */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        className="form-content"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="name"
        
// טלפון/ כתובת מייל: איך שנוח, כדי שנחזור אליך בהקדם
// והצורך בקווים כללים: אנחנו קשובות תמיד, תכתבו.
          label="שם"
          slotProps={{
            inputLabel: {
              sx: {
                direction: 'rtl',
                textAlign: 'right',
                left: 'auto',
                right: 0,
                marginRight: '8px' // רווח קטן מהקצה הימני

              }
            }
          }}
          variant="standard"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!error.name}
          helperText={error.name}
          className="input-field"
        />
        <TextField
          id="phone"
          label="מספר נייד"
          slotProps={{
            inputLabel: {
              sx: {
                direction: 'rtl',
                textAlign: 'right',
                left: 'auto',
                right: 0,
                marginRight: '8px' // רווח קטן מהקצה הימני

              }
            }
          }}
          variant="standard"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!error.phone}
          helperText={error.phone}
          className="input-field"
        />
        <TextField
          id="email"
          label="אימייל"
          slotProps={{
            inputLabel: {
              sx: {
                direction: 'rtl',
                textAlign: 'right',
                left: 'auto',
                right: 0,
                marginRight: '8px' // רווח קטן מהקצה הימני

              }
            }
          }}
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error.email}
          helperText={error.email}
          className="input-field"
        />
        <TextField
          id="message"
          label="הודעה"
          slotProps={{
            inputLabel: {
              sx: {
                direction: 'rtl',
                textAlign: 'right',
                left: 'auto',
                right: 0,
                marginRight: '8px' // רווח קטן מהקצה הימני

              }
            }
          }}
          variant="standard"
          multiline
           rows={3}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field"
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? "שולח..." : "שלח הודעה"}
        </Button>
      </Box>
    </Box>
    </div>
   <div className="form-image">
    <video 
  ref={videoRef}
      src="istockphoto-1161409647-640_adpp_is.mp4"
      muted
      className="no-click">
</video>
    </div>
    </div>
    </div>
       </div> 
  );
};

export default FileUploadForm;
