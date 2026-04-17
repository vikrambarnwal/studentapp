import './Students.css';
import StudentList from './StudentList.jsx';
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';


function StudentDashboard({ onLogout }) {

  const [students, setStudents] = useState([]);
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    fetch('http://localhost:5000/users/all')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChangeHandler = useCallback(e => setName(e.target.value), []);
  const emailChangeHandler = useCallback(e => setEmail(e.target.value), []);

  const saveUser = useCallback(() => {
    //add a validation

    const newStudent = { "name": name, "email": email };
    setStudents(prev => [...prev, newStudent]);
    // clear form
    setName("");
    setEmail("");
  }, [name, email]);

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <label class="navbar-brand">Welcome {userName}</label>
          <Link to='/about'>Test </Link>
          <form class="d-flex">
            <button class="btn btn-outline-success" onClick={onLogout}>Logout</button>
          </form>
        </div>
      </nav>

      <h3>Student dashboard</h3>

      <div className='mb-5'>

        <div className="form-group">
          <label>name: </label>
          <input className="input-field" value={name} onChange={nameChangeHandler} />
        </div>

        <div className="form-group">
          <label>email: </label>
          <input className="input-field" value={email} onChange={emailChangeHandler} />
        </div>

        <button className="button" onClick={saveUser}>Save</button>
      </div>
      <div className="student-list">
        <h4>Total Students : {students.length}</h4>
        {students.map(s => <StudentList key={s._id} name={s.name} id={s._id}  email={s.email} />)}
      </div>
    </div>
  );
}


export default StudentDashboard;