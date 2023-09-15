// import React from 'react';
// import { Link, Route, useNavigate,Router,Routes } from 'react-router-dom';
// import SubjectTutors from './SubjectTutors';

// function Student() {
//   const courses = [
//     { id: 1, title: 'Physics', image: 'physics.jpg', slug: 'physics' },
//     { id: 2, title: 'Mathematics', image: 'mathematics.jpg', slug: 'mathematics' },
//     { id: 3, title: 'Chemistry', image: 'chemistry.jpg', slug: 'chemistry' },
//     { id: 4, title: 'Biology', image: 'biology.jpg', slug: 'biology' },
//     { id: 5, title: 'Humanities', image: 'humanities.jpg', slug: 'humanities' },
//     { id: 6, title: 'Computer', image: 'computer.jpg', slug: 'computer' },
//   ];

//   const navigate = useNavigate();

//   return (
//     <div className="container mt-5">
//       <h2 style={{color:"white"}}>Available Courses --</h2>
//       <div className="row">
//         {courses.map((course) => (
//           <div key={course.id} className="col-md-4 mb-4" >
//             <div className="card d-flex flex-column justify-content-between">
//               <img
//                 src={`${process.env.PUBLIC_URL}/images/${course.image}`}
//                 className="card-img-top img-fluid"
//                 alt={course.title}
//                 style={{ height: '200px', objectFit: 'cover' }}
//               />
//               <div className="card-body d-flex flex-column justify-content-between">
//                 <h5 className="card-title">{course.title}</h5>
//                 <button
//                   className="btn btn-primary mt-auto"
//                   onClick={() => navigate(`/student/${course.slug}`, { state: { subject: course.title } })}
//                 >
//                   Browse Tutors
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
//       <Routes>
//       <Route path="/student/:subject" element={<SubjectTutors />} /></Routes>
//     </div>
//   );
// }

// export default Student;
import React from 'react';
import { Link, Route, useNavigate, Router, Routes } from 'react-router-dom';
import SubjectTutors from './SubjectTutors';
import './Student.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBook, faPhone, faMessage } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faFacebook,faInstagram,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'

function Student() {
  const courses = [
    { id: 1, title: 'Physics', image: 'physics.jpg', slug: 'physics' },
    { id: 2, title: 'Mathematics', image: 'mathematics.jpg', slug: 'mathematics' },
    { id: 3, title: 'Chemistry', image: 'chemistry.jpg', slug: 'chemistry' },
    { id: 4, title: 'Biology', image: 'biology.jpg', slug: 'biology' },
    { id: 5, title: 'Humanities', image: 'humanities.jpg', slug: 'humanities' },
    { id: 6, title: 'Computer', image: 'computer.jpg', slug: 'computer' },
  ];

  const navigate = useNavigate();
  const [chatMessages, setChatMessages] = useState([
    { text: 'Hello, how can I help you?', type: 'received' },
  ]);
  const handleSendMessage = (message) => {
    // Add the user's message to the chat messages
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: 'sent' },
    ]);

    // Simulate a response after a brief delay
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: 'You will be connected to an agent soon.', type: 'received' },
      ]);
    }, 1000); // Delay in milliseconds
  };
    // Define a state variable to store student details
    const [studentDetails, setStudentDetails] = useState([]);

    // Function to fetch student details by username
    const handleSubmit=()=>{
      alert("Message received,we will revert back to you soon!!")
    }


  return (
    <div>
     
      {/* <div className="hero-image">
        
        <img src={`${process.env.PUBLIC_URL}/images/hero.jpg`} alt="Hero" className="img-fluid" />
        
        <div className="hero-content">
          <h1>Welcome to Our Online Learning Platform</h1>
          <p>Explore a wide range of subjects and find the perfect tutor for your studies.</p>
          <Link to="/about" className="btn btn-warning">Learn More</Link>
        </div>
        </div>
          */}
          <Navbar></Navbar>
          <div className="hero-image">
        <Carousel interval={2000} controls={false} autoPlay>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/images/hero.jpg`}
              alt="Hero"
            />
            <Carousel.Caption>
              <h1>Welcome to Our Online Learning Platform</h1>
              <p>Explore a wide range of subjects and find the perfect tutor for your studies.</p>
              <Link to="/about" className="btn btn-warning">Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/images/hero1.jpg`}
              alt="Hero 1"
            />
            <Carousel.Caption>
              <h1>Welcome to Our Online Learning Platform</h1>
              <p>Explore a wide range of subjects and find the perfect tutor for your studies.</p>
              <Link to="/about" className="btn btn-warning">Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/images/hero2.jpg`}
              alt="Hero 2"
            />
            <Carousel.Caption>
              <h1>Welcome to Our Online Learning Platform</h1>
              <p>Explore a wide range of subjects and find the perfect tutor for your studies.</p>
              <Link to="/about" className="btn btn-warning">Learn More</Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
     
      <div className="container mt-5">
        <h2 style={{ color: 'black',fontFamily:"cursive" }}>Available Courses</h2>
        <div className="row">
          {courses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card d-flex flex-column justify-content-between">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${course.image}`}
                  className="card-img-top img-fluid"
                  alt={course.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{course.title}</h5>
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      navigate(`/student/${course.slug}`, {
                        state: { subject: course.title },
                      })
                    }
                  >
                    Browse Tutors
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



 <div className="container mt-5">
        <h2 className="mb-4" style={{fontFamily:"cursive"}}>Testimonials</h2>
        <div className="row">
          {/* Testimonial 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
               
                <p className="card-text">
                " I am satisfied with the training given by TutorMe teachers. During training, the faculty was able to clear my doubts regarding design process followed in the industry and provide real life examples "
                </p>
              </div>
              <div className="card-footer d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/images/human1.jpg`}
                  alt="Person 1"
                  className="testimonial-image"
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginRight: '10px' }}
                />
                <div className="ml-3">
                  <h5 className="mb-0">John Doe</h5>
                  <small>Student</small>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                
                <p className="card-text">
                " Overall experience is very good. Guidelines given by trainers were excellent. If you want to optimize your Engineering skills, it’s my personal suggestion to join TutorMe "
                </p>
              </div>
              <div className="card-footer d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/images/human2.jpg`}
                  alt="Person 2"
                  className="testimonial-image"
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginRight: '10px' }}
                />
                <div className="ml-3">
                  <h5 className="mb-0">Jane Smith</h5>
                  <small>Student</small>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                
                <p className="card-text">
                I am satisfied with the training and training faculty.It is well designed course with practical orientation "
                </p>
              </div>
              <div className="card-footer d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/images/human3.jpg`}
                  alt="Person 3"
                  className="testimonial-image"
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', marginRight: '10px' }}
                />
                <div className="ml-3">
                  <h5 className="mb-0">Alice Johnson</h5>
                  <small>Student</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="chat-box">
      <div className="chat-icon">
        
      </div>
      <div className="chat-content">
        <div className="chat-messages">
          
          <div className="chat-message received">Hello, how can I help you?</div>
          <div className="chat-message sent">I have a question about a course.</div>
          
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>     */}
     <div>
      {/* ... Existing code ... */}
      
      <div className="chat-box">
        <div className="chat-icon"></div>
        <div className="chat-content">
          <div className="chat-messages">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.type}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                const input = document.querySelector('.chat-input input');
                if (input) {
                  handleSendMessage(input.value);
                  input.value = '';
                }
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      
      {/* ... Rest of your content ... */}
    </div>


<footer className="footer" style={{ backgroundColor: '#ffcd39', color: 'black',fontFamily:'cursive' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact Us <FontAwesomeIcon icon={faMessage} color="white"/> </h4>
            
            <p> Email: 20me02020@iitbbs.ac.in</p>
            <p>Phone: 7038636388</p>
          </div>
          <div className="col-md-4">
            <h4>Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-light" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
          <div className="col-md-4">
            <h4>Stay Connected</h4>
            <p>Follow us on social media for updates and news!</p>
            <div style={{display:'flex',justifyContent:"space-evenly",position:"absolute"}}>
            <div style={{marginRight:"70px"}}>
              <a href="https://twitter.com/YASHNARENDRAJO1">
            <FontAwesomeIcon icon={faTwitter} color="white" size="2x"/></a> </div>
            <div style={{marginRight:"70px"}}><a href='https://www.instagram.com/yashjoshi8458/'>
            <FontAwesomeIcon icon={faInstagram} color="white" size="2x"/></a> </div>
            <div style={{marginRight:"10px"}}><a href='https://www.linkedin.com/in/yash-joshi-655a1b206/'>
            <FontAwesomeIcon icon={faLinkedin} color="white" size="2x"/> </a></div>
            </div>


           
          </div>
        </div>
      </div>
    </footer>
      
      <Routes>
        <Route path="/student/:subject" element={<SubjectTutors />} />
      </Routes>
    </div>
  );
}

export default Student;



