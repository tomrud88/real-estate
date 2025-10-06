import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "./card.scss";
import React, { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

export default function Card({ item }) {
  const { currentUser } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      const response = await apiRequest.delete(`/posts/${item.id}`);
      console.log(response);
      if (response.ok) {
        console.log("Post deleted successfully");
      } else {
        const errorData = await response.json();
        console.log(`Failed to the delete the post: ${errorData.message}`);
      }
    } catch (error) {
      console.log("Error deleting the post:", error);
    }
  };
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/icons8-pin-100.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">£{item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/icons8-bed-100.png" alt="bed" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/icons8-bath-100.png" alt="bath" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/icons8-save-100.png" alt="save" />
            </div>
            <div className="icon">
              <img src="/icons8-chat-64.png" alt="chat" />
            </div>
          </div>
        </div>
        {currentUser && item.userId === currentUser.id && (
          <div className="buttonGroup">
            <Link to={`/update/${item.id}`} className="button updateButton">
              Update
            </Link>
            <button className="button deleteButton" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
