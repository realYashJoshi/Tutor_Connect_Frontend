

// import React from 'react';
// import { Link, Route,Routes,useNavigate} from 'react-router-dom';
// import StudentDetailsForm from './StudentDetailsForm';

// function SubjectTutors() {
//   const tutors = [
//     { id: 1, name: 'Tutor 1', popularity: 5, fees: 500, duration: '2 months', startingDate: 'August 2023', enrolled: 15, image: 'tutor1.jpg' },
//     { id: 2, name: 'Tutor 2', popularity: 4, fees: 690, duration: '1.5 months', startingDate: 'September 2023', enrolled: 20, image: 'tutor2.jpg' },
//     { id: 3, name: 'Tutor 3', popularity: 3, fees: 420, duration: '2.5 months', startingDate: 'October 2023', enrolled: 10, image: 'tutor3.jpg' },
//     // ... add more tutors
//   ];

//   // Sort tutors by enrollment in descending order
//   const sortedTutors = [...tutors].sort((a, b) => b.enrolled - a.enrolled);
//   const navigate = useNavigate();
//   return (
//     <div className="container mt-5">
//       <h2 style={{ color: 'white' }}>Popular Tutors for This Subject</h2>
//       <div className="row">
//         {sortedTutors.map((tutor, index) => (
//           <div key={tutor.id} className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src={`${process.env.PUBLIC_URL}/images/tutors/${tutor.image}`}
//                 className="card-img-top img-fluid"
//                 alt={tutor.name}
//                 style={{ height: '300px', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">
//                   {index === 0 ? (
//                     <>
//                       <span className="badge badge-warning mr-2">Top Tutor</span>
//                       {tutor.name}
//                     </>
//                   ) : (
//                     tutor.name
//                   )}
//                 </h5>
//                 <p className="card-text"><strong>Fees:</strong> Rs {tutor.fees}</p>
//                 <p className="card-text"><strong>Course Duration:</strong> {tutor.duration}</p>
//                 <p className="card-text"><strong>Starting Date:</strong> {tutor.startingDate}</p>
//                 <p className="card-text"><strong>Enrolled:</strong> {tutor.enrolled} students</p>
//                 {/* <Link to={`/student/${tutor.id}`} className="btn btn-primary">
//                   Enroll under this tutor
//                 </Link> */}
//                 <button
//                   className="btn btn-primary mt-auto"
//                   onClick={() => navigate(`/student/payment`)}
//                 >
//                   Enroll
//                 </button>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Routes>
//       <Route path="/student/payment" element={<StudentDetailsForm />} /></Routes>
//     </div>
//   );
// }

// 
// import React from 'react';
// import { Link, Route, Routes, useNavigate } from 'react-router-dom';
// import StudentDetailsForm from './StudentDetailsForm';

// function SubjectTutors() {
//   const tutors = [
//     { id: 1, name: 'Tutor 1', popularity: 5, fees: 500, duration: '2 months', startingDate: 'August 2023', enrolled: 15, image: 'tutor1.jpg' },
//     { id: 2, name: 'Tutor 2', popularity: 4, fees: 690, duration: '1.5 months', startingDate: 'September 2023', enrolled: 20, image: 'tutor2.jpg' },
//     { id: 3, name: 'Tutor 3', popularity: 3, fees: 420, duration: '2.5 months', startingDate: 'October 2023', enrolled: 10, image: 'tutor3.jpg' },
//     // ... add more tutors
//   ];

//   const navigate = useNavigate();

//   return (
//     <div className="container mt-5">
//       <h2 style={{ color: 'white' }}>Popular Tutors for This Subject</h2>
//       <div className="row">
//         {tutors.map((tutor, index) => (
//           <div key={tutor.id} className="col-md-4 mb-4">
//             <div className="card">
//             <img
//                 src={`${process.env.PUBLIC_URL}/images/tutors/${tutor.image}`}
//                 className="card-img-top img-fluid"
//                 alt={tutor.name}
//                 style={{ height: '300px', objectFit: 'cover' }}
//               />
//               <p className="card-text"><strong> Name</strong>  {tutor.name}</p>
//               <p className="card-text"><strong> Fees:</strong> Rs {tutor.fees}</p>
//                  <p className="card-text"><strong> Course Duration:</strong> {tutor.duration}</p>
//                 <p className="card-text"><strong> Starting Date:</strong> {tutor.startingDate}</p>
//                 <p className="card-text"><strong> Enrolled:</strong> {tutor.enrolled} students</p>
//               <button
//                 className="btn btn-warning mt-auto"
//                 onClick={() => navigate(`/student/payment`, { state: { tutorName: tutor.name } })}
//               >
//                 Enroll
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Routes>
//         <Route path="/student/payment" element={<StudentDetailsForm />} />
//       </Routes>
//     </div>
//   );
// }
// export default SubjectTutors;
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import StudentDetailsForm from './StudentDetailsForm';
import Navbar from './Navbar';

function SubjectTutors() {
  const [tutors, setTutors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Replace 'YOUR_UNSPLASH_API_KEY' with your actual Unsplash API key
    const unsplashApiKey = 'c9qoFL4mO8Kziu28uR5hnEOgWXG0VQ_ofNbMc3AcASU';

    // Define the Unsplash API URL to fetch teacher images
    const unsplashApiUrl = `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}&query=teacher&count=3`;

    // Fetch teacher images from Unsplash
    fetch(unsplashApiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract image URLs from the Unsplash response
        const tutorImages = data.map((imageData) => imageData.urls.small);
        var popularity=10;
        var fees=100;
        // Create tutor data with image URLs
        const tutorData = tutorImages.map((imageUrl, index) => ({
          id: index + 1,
          name: `Tutor ${index + 1}`,
          imageUrl, // Use the Unsplash image URL
          popularity: popularity*(index+1), // You can customize these values
          fees: fees*(index+1),
          duration: `${index} months`,
          startingDate: `Jan ${index+1}`,
          enrolled: `${(index+1)*50}`,
        }));

        setTutors(tutorData);
      })
      .catch((error) => {
        console.error('Error fetching teacher images:', error);
      });
  }, []);

  return (
    <div >
      <Navbar></Navbar>
      <h2 style={{ color: 'black' }}>Popular Tutors for This Subject</h2>
      <div className="row">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={tutor.imageUrl} // Use the Unsplash image URL
                className="card-img-top img-fluid"
                alt={tutor.name}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <p className="card-text"><strong>Name:</strong> {tutor.name}</p>
              <p className="card-text"><strong>Fees:</strong> Rs {tutor.fees}</p>
              <p className="card-text"><strong>Course Duration:</strong> {tutor.duration}</p>
              <p className="card-text"><strong>Starting Date:</strong> {tutor.startingDate}</p>
              <p className="card-text"><strong>Enrolled:</strong> {tutor.enrolled} students</p>
              <button
                className="btn btn-warning mt-auto"
                onClick={() => navigate(`/student/payment`, { state: { tutorName: tutor.name } })}
              >
                Enroll
              </button>
            </div>
          </div>
        ))}
      </div>
      <Routes>
        <Route path="/student/payment" element={<StudentDetailsForm />} />
      </Routes>
    </div>
  );
}

export default SubjectTutors;


