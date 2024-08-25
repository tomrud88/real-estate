import React, { useContext, useState } from 'react'
import './chat.scss'
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';
import { format } from "timeago.js";

export default function Chat({chats}) {
  const [chat, setChat] = useState(null);
  
  const { currentUser } = useContext(AuthContext);

  const handleOpenChat = async (id, receiver) => {
    try {
      console.log("Opening chat with ID:", id);

      const res = await apiRequest("/chats/" + id);
      //  if (!res.data.seenBy.includes(currentUser.id)) {
      //    decrease();
      //  }
      setChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text")

    if (!text) return;
    try {
      
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor: c.seenBy.includes(currentUser.id)
                ? "white"
                : "yellow",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver.avatar || "icons8-face-100 (1).png"} alt="" />
            <span>{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={chat.receiver.avatar || "icons8-face-100 (1).png"}
                alt=""
              />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              x
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id
                      ? "right"
                      : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text" id=""></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
