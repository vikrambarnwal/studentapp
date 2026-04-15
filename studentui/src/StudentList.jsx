import './Students.css';

function StudentList(props) {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </table>
  );
}


export default StudentList;