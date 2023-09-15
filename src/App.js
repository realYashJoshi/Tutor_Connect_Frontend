
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Student from './Student';
// import Teacher from './Teacher';
// import SubjectTutors from './SubjectTutors';
// import './App.css';
// import StudentDetailsForm from './StudentDetailsForm';

// function App() {
//   return (
//     <Router>
//       <div className="background-image">
//         <Routes>
//           <Route path="/" element={<LoginForm />} />
//           <Route path="/student" element={<Student />} />
//           <Route path="/teacher/:username" element={<Teacher />} />
//           <Route path="/student/:subject" element={<SubjectTutors />} />
//           <Route path="/student/payment" element={<StudentDetailsForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   if (submitted) {
//     if (role === 'student') {
//       return <Navigate to="/student" />;
//     } else if (role === 'teacher') {
//       return <Navigate to={`/teacher/${username}`} />;
//     }
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
//             <div className="card-body p-5">
//               <h2 className="card-title">Login Form</h2>
              // <form onSubmit={handleSubmit}>
              //   <div className="form-group">
              //     <label>Username:</label>
              //     <input
              //       type="text"
              //       className="form-control"
              //       value={username}
              //       onChange={(e) => setUsername(e.target.value)}
              //       required
              //     />
              //   </div>
              //   <div className="form-group">
              //     <label>Password:</label>
              //     <input
              //       type="password"
              //       className="form-control"
              //       value={password}
              //       onChange={(e) => setPassword(e.target.value)}
              //       required
              //     />
              //   </div>
              //   <div className="form-group">
              //     <label>Role:</label>
              //     <select
              //       className="form-control"
              //       value={role}
              //       onChange={(e) => setRole(e.target.value)}
              //       required
              //     >
              //       <option value="">Enter Your Role</option>
              //       <option value="student">Student</option>
              //       <option value="teacher">Teacher</option>
              //     </select>
              //   </div>
              //   <br />
              //   <button type="submit" className="btn btn-primary">
              //     Submit
              //   </button>
              // </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
// import Student from './Student';
// import Teacher from './Teacher';
// import SubjectTutors from './SubjectTutors';
// import './App.css';
// import StudentDetailsForm from './StudentDetailsForm';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="background-image">
//         <Routes>
//           <Route path="/" element={<LoginForm />} />
//           <Route path="/student" element={<Student />} />
//           <Route path="/teacher/:username" element={<Teacher />} />
//           <Route path="/student/:subject" element={<SubjectTutors />} />
//           <Route path="/student/payment" element={<StudentDetailsForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container" style={{fontFamily:"cursive",fontWeight:"bold"}}>
//         <Link to="/" className="navbar-brand">
//           <img
//             src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
//             alt="Logo"
//             className="navbar-logo"
            
//           />
//           Tutor Me
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
           
//             <li className="nav-item">
//               <Link to="/about" className="nav-link">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact" className="nav-link">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
  

//   );
// }

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('');
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   if (submitted) {
//     if (role === 'student') {
//       return <Navigate to="/student" />;
//     } else if (role === 'teacher') {
//       return <Navigate to={`/teacher/${username}`} />;
//     }
//   }

//   return (
//     <div >
//       <br></br><br></br><br></br>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body p-5">
//               <h2 className="card-title text-center" style={{fontFamily:"cursive"}} >Join for Free !!</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Username:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password:</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Role:</label>
//                   <select
//                     className="form-control"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                     required
//                   >
//                     <option value="">Enter Your Role</option>
//                     <option value="student">Student</option>
//                     <option value="teacher">Teacher</option>
//                   </select>
//                 </div>
//                 <br />
//                 <button type="submit" className="btn btn-warning" >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <img src={`${process.env.PUBLIC_URL}/images/loginbg.jpg`} alt="Login Background" className="img-fluid" />
//         </div>
//         <div className="col-md-10">
//         <img src={`${process.env.PUBLIC_URL}/images/loginbg2.jpg`} alt="Login Background" className="img-fluid" /> 
//         </div>
//       </div>
//       <br></br><br></br><br></br><br></br>
//       <footer className="footer" style={{ backgroundColor: '#ffcd39', color: 'black',fontFamily:'cursive' }}>
//       <div className="container py-5">
//         <div className="row">
//           <div className="col-md-4">
//             <h4>Contact Us</h4>
//             <p>Email: contact@example.com</p>
//             <p>Phone: +1 (123) 456-7890</p>
//           </div>
//           <div className="col-md-4">
//             <h4>Send Us a Message</h4>
//             <form>
//               <div className="mb-3">
//                 <input type="text" className="form-control" placeholder="Name" />
//               </div>
//               <div className="mb-3">
//                 <input type="email" className="form-control" placeholder="Email" />
//               </div>
//               <div className="mb-3">
//                 <textarea className="form-control" rows="4" placeholder="Message"></textarea>
//               </div>
//               <button type="submit" className="btn btn-light">Submit</button>
//             </form>
//           </div>
//           <div className="col-md-4">
//             <h4>Stay Connected</h4>
//             <p>Follow us on social media for updates and news!</p>
           
//           </div>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// }

// export default App;
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Student from './Student';
import Teacher from './Teacher';
import SubjectTutors from './SubjectTutors';
import './App.css';
import StudentDetailsForm from './StudentDetailsForm';
import AboutUs from './AboutUs';

function App() {
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
  };

  return (
    <Router>
      
      <div className="background-image">
        <Routes>
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/student" element={<Student username={username} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Student />} />
          <Route path="/teacher/:username" element={<Teacher />} />
          <Route path="/student/:subject" element={<SubjectTutors />} />
          <Route path="/student/payment" element={<StudentDetailsForm />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container" style={{ fontFamily: "cursive", fontWeight: "bold" }}>
        <Link to="/" className="navbar-brand">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="Logo"
            className="navbar-logo"
          />
          Tutor Me
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (role === 'student') {
      onLogin(username);
    }
  };

  if (submitted) {
    if (role === 'student') {
      return <Navigate to= "/student"/>;
    } else if (role === 'teacher') {
      return <Navigate to={`/teacher/${username}`} />;
    }
  }

  return (
    <div>
      <br></br><br></br><br></br>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="card-title text-center" style={{ fontFamily: "cursive" }}>Join for Free !!</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Role:</label>
                  <select
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Enter Your Role</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>
                <br />
                <button type="submit" className="btn btn-warning" >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={`${process.env.PUBLIC_URL}/images/loginbg.jpg`} alt="Login Background" className="img-fluid" />
        </div>
        <div className="col-md-10">
          <img src={`${process.env.PUBLIC_URL}/images/loginbg2.jpg`} alt="Login Background" className="img-fluid" />
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      <footer className="footer" style={{ backgroundColor: '#ffcd39', color: 'black', fontFamily: 'cursive' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
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
                <button type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>
            <div className="col-md-4">
              <h4>Stay Connected</h4>
              <p>Follow us on social media for updates and news!</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

