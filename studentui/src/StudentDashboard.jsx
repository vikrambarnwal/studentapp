import './Students.css';
import StudentList from './StudentList.jsx';
import React, { useState, useCallback } from 'react';


const initialStudents = [
  { name: "Alice", id: 1, marks: 25 },
  { name: "Bob", id: 19 },
  { name: "Charlie", id: 2 },
];

function StudentDashboard({ onLogout }) {

  const [students, setStudents] = useState(initialStudents);

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [marks, setMarks] = useState("");

  const nameChangeHandler = useCallback(e => setName(e.target.value), []);
  const idChangeHandler = useCallback(e => setId(e.target.value), []);
  const marksChangeHandler = useCallback(e => setMarks(e.target.value), []);

  const saveUser = useCallback(() => {
    //add a validation

    const newStudent = { "name": name, id: Number(id) };
    setStudents(prev => [...prev, newStudent]);
    // clear form
    setName("");
    setId("")
  }, [name, id]);

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Welcome</a>
          <form class="d-flex">
            <button class="btn btn-outline-success" onClick={onLogout}>Logout</button>
          </form>
        </div>
      </nav>

      <h3>Student dashboard</h3>

      <div className='mb-5'>

        <div className="form-group">
          <label>id: </label>
          <input className="input-field" value={id} onChange={idChangeHandler} />
        </div>

        <div className="form-group">
          <label>name: </label>
          <input className="input-field" value={name} onChange={nameChangeHandler} />
        </div>

        <div className="form-group">
          <label>Marks: </label>
          <input className="input-field" value={marks} onChange={marksChangeHandler} />
        </div>

        <button className="button" onClick={saveUser}>Save</button>
      </div>
      <div className="student-list">
        <h4>Total Students : {students.length}</h4>
        {students.map(s => <StudentList key={s.id} name={s.name} id={s.id} />)}
      </div>
    </div>
  );
}


export default StudentDashboard;