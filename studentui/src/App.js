import './App.css';
import LoginPage from './Login';
import StudentDashboard from './StudentDashboard'

var isLogin = true;
function App() {

  const logout = () => {
    alert('Logout success')
    isLogin = false;
  };


  return (
    <div className="container">
      {isLogin ? <StudentDashboard onLogout={logout} /> : <LoginPage />}
    </div>
  );
}

export default App;
