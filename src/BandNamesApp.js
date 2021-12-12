import HomePage from "./pages/HomePage"
import { SocketProvider } from "./context/SocketContext"

const BandNameApp = () => {
    
    return (
        <SocketProvider>
            <HomePage/>
        </SocketProvider>
    )
}
export default BandNameApp