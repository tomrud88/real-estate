import React from 'react'
import './profilePage.scss'
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {

  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      localStorage.removeItem("user")
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="icons8-face-100 (1).png" alt="" />
            </span>
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <div className="title">
            <h1>Saved List</h1>
                  </div>
                  <List/>
        </div>
      </div>
      <div className="chatContainer">
              <div className="wrapper">
                  <Chat />
        </div>
      </div>
    </div>
  );
}
