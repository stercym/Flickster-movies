import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  // Retrieve the logged-in user's data from localStorage to append it in the welcome message
  const userData = JSON.parse(localStorage.getItem("user"));
  const firstName = userData?.firstName || "User";

  useEffect(() => {
     // Redirect to login page if user is not logged in
    if (!userData) {
      navigate("/");
    }
  }, []);

  // clear localStorage if a user clicks logout and navigate back to login page
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="home-container">
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>


      {/*Welcome message and dashboard information */}
      <div className="content">
        <h2>Welcome {firstName}!</h2>
        <p>This is your personal dashboard.</p>
      </div>
    </div>
  );
}

export default Home;
