import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const login = async (e) => {
    e.preventDefault();
    console.log("Login Details:", { email, password });
    const response = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      alert('Login successful');
      localStorage.setItem("userName", data.user.name);
      onLogin();
      navigate("/");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={login} style={styles.form}>
        <h2>Login</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" style={styles.button}>Log In</button>
      </form>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: { display: 'flex', justifyContent: 'center', marginTop: '50px' },
  form: { border: '1px solid #ccc', padding: '20px', borderRadius: '8px', width: '300px' },
  inputGroup: { marginBottom: '15px', display: 'flex', flexDirection: 'column' },
  button: { width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }
};

export default LoginPage;
