import React, { useContext, useState } from 'react'
import './singlePage.scss'
import Slider from '../../components/slider/Slider'
import Map from '../../components/map/Map'
import { useLoaderData, useNavigate } from 'react-router-dom'
import DOMPurify from "dompurify";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

export default function SinglePage() {
  const post = useLoaderData();
  console.log(post)
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

    const handleSendMessage = async () => {
    if (!currentUser) {
      navigate("/login");
    } else {
      try {
        const res = await apiRequest.post("/chats", { receiverId: post.user.userId });
        const newChat = res.data;
        navigate("/profile", { state: { chatId: newChat.id, receiver: post.username } });
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/icons8-pin-100.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">£{post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="icons8-utilities-96.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="icons8-pets-96.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets Not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="icons8-property-64.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="icons8-square-80.png" alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="icons8-bed-100.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="icons8-bath-100.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="icons8-school-96.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="icons8-bus-96.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>
                  {post.postDetail.bus > 999
                    ? post.postDetail.bus / 1000 + "km"
                    : post.postDetail.bus + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="icons8-restaurant-100.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>
                  {post.postDetail.restaurant > 999
                    ? post.postDetail.restaurant / 1000 + "km"
                    : post.postDetail.restaurant + "m"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button onClick={handleSendMessage}>
              <img src="/icons8-chat-64.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/icons8-save-100.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
