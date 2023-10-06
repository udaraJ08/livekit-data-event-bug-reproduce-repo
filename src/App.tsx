import React, {useState} from 'react';
import Room from "./views/Room";
import './assets/css/meeting.css'
import './assets/css/theme.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {isDesktopView} from "./helpers/util";
import HomePage from "./views/HomePage/HomePage";

function App() {

    const [token, setToken] = useState();

    return (
        <div className="full-page">
            {token ? <Room token={token}/> : <HomePage setRoomToken={setToken}/>}
            <ToastContainer
                containerId="chatContainer"
                limit={1}
                position={isDesktopView() ? "top-right" : "top-left"}
                theme="dark"
                hideProgressBar
            />
        </div>
    );
}

export default App;
