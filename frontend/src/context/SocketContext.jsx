import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext)
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(process.env.CLIENT_URL, {
      transports: ["websocket", "polling"], // Attempt WebSocket first, then fallback to polling
    });
    setSocket(newSocket);

    return () => newSocket.close(); // Clean up the socket connection on component unmount
  }, []);
    
    useEffect(() => {
        currentUser && socket?.emit("newUser", currentUser.id);
    },[currentUser, socket])

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
