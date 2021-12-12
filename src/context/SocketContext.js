import { createContext } from "react";
import { wsURL } from "../constants";
import useSocket from "../hooks/useSocket";


const SocketContext = createContext(null)
const SocketProvider = ({ children }) => {
    
    const { socket, online } = useSocket(wsURL);

    return <SocketContext.Provider value={{socket, online}}>
        {children}
    </SocketContext.Provider>
}

export  { SocketContext, SocketProvider}