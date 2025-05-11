// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './index.css';
// import HomePage from './home-page';
// import PhotoGallery from './PhotoGallery';
// import ProjectsGallery from './ProjectsGallery';
// import NavBar from './Nav';
// import AboutSection from './about';
// import FileUploadForm from './FormComponent';
// import Layout from './Layout';
// import ProtectedPage from './protectedPage'; // Import the protected page
// import SecretRoute from './Secret';
// import Upload  from './upload';


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="ProjectsGallery" element={<ProjectsGallery />} />
//           <Route path="PhotoGallery/:imageId" element={<PhotoGallery />} />
//           <Route path="AboutSection" element={<AboutSection />} />
//           <Route path="FileUploadForm" element={<FileUploadForm />} />
//           {/* Protected route */}
//           <Route path="protected" element={<SecretRoute />} />

//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import HomePage from './home-page';
import PhotoGallery from './PhotoGallery';
import ProjectsGallery from './ProjectsGallery';
import NavBar from './Nav';
import AboutSection from './about';
import FileUploadForm from './FormComponent';
import Layout from './Layout';

import Upload from './upload';
import Secret from './Secret';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ProjectsGallery" element={<ProjectsGallery myurl='' />} />

          <Route path="AboutSection" element={<AboutSection />} />  
                  <Route path="PhotoGallery/:imageId" element={<PhotoGallery />} />
          <Route path="FileUploadForm" element={<FileUploadForm />} />
          
          {/* Protect the /upload route */}
          {/* <Route+
            path="upload"
            element={
              localStorage.getItem("isAuthenticated") === "true" ? (
                <Upload />
              ) : (
                <Navigate to="/" replace /> // Redirect to home if not authenticated
              )
            }
          /> */}
          
          {/* SecretRoute prompts user to enter password */}
          {/* <Route path="protected/ProjectsGallery" element={<ProjectsGallery2 />} /> */}

          <Route path="protected" element={  <Secret />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
