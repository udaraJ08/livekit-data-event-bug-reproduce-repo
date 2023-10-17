import '../../assets/css/controlBar.css'
import ChatIco from "../../assets/SVG/ChatIco";
import React from "react";

const size = 1.3

export interface IProps {
    setChatOpen: (e: boolean) => void;
    chatOpen: boolean;
}

const ControlBar = ({setChatOpen, chatOpen}: IProps) => {

    const handleChatOpen = () => {
        setChatOpen(!chatOpen)
    }

    return <div className='controlBar bg-brand-black d-flex'>
        <div className='flex-5 d-center gap-4'>

            <div
                onClick={handleChatOpen}
                className='d-center flex-column ctrl-btn'>
                <ChatIco width={size} height={size}/>
                <p className='text-center text-small'>Chat</p>
            </div>

        </div>
        <div className='flex-1 d-flex align-items-center justify-content-end mr-2'>
            <button
                onClick={() => window.location.reload()}
                className='dangerButton'
            >
                end
            </button>
        </div>
    </div>
}

export default ControlBar
