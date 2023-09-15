
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Teacher() {
  const [studentData, setStudentData] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);

  const { username } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://tutor-connect.onrender.com${username}`);
        const data = await response.json();

        if (data.studentDetails) {
          setStudentData(data.studentDetails);

          const earnings = data.studentDetails.length * 500;
          setTotalEarnings(earnings);
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    }

    fetchData();
  }, [username]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{color:"white"}}>Student Data for Tutor: {username}</h2>
      <div className="card">
        <div className="card-header">
          <h5>Total Earnings: Rs{totalEarnings}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {Array.isArray(studentData) ? (
            studentData.map((student) => (
              <li className="list-group-item" key={student._id}>
                <strong>Name:</strong> {student.name}<br />
                <strong>Year:</strong> {student.year}<br />
                <strong>Institution:</strong> {student.institution}
              </li>
            ))
          ) : (
            <li className="list-group-item">Loading student data...</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Teacher;



