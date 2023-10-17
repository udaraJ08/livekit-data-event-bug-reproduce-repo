import '../../assets/css/chat.css'
import {faChevronDown, faClose, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import {ENTER, EVERYONE} from "./helpers/types";
import {STREAM_CHAT} from "../../helpers/constants";
import {useEnsureRoom} from "@livekit/components-react";
import {DataPacket_Kind} from "livekit-client";
import {IProps} from "../ControlBar/ControlBar";

const ChatView = ({setChatOpen, chatOpen}: IProps) => {

    const [messageSend, setMessageSend] = useState('')

    const vidRoom = useEnsureRoom()

    const handleChatClose = () => {
        setChatOpen(!chatOpen)
    }

    const composeMessage = (event: any) => {
        if (event.key === ENTER) {
            publishMessage();
        }
    };

    // PUBLISH MESSAGE
    const publishMessage = (): void => {

        if (messageSend.length <= 0) return;

        const strData = JSON.stringify({
            data: messageSend,
            receiver: EVERYONE,
            rev_sid: '1234',
            stream: STREAM_CHAT,
        });

        const encoder = new TextEncoder();

        const data = encoder.encode(strData);

        try {
            vidRoom?.localParticipant
                .publishData(data, DataPacket_Kind.LOSSY)
        } catch (err: any) {
            console.error(err.message)
        }
    };

    return <div className='chat-section'>
        <div className='text-dark p-1'>
            <div>
                <FontAwesomeIcon
                    onClick={handleChatClose}
                    className="absolute pointer chat-close clickable"
                    color="black"
                    icon={faClose}
                />
            </div>
            <div>
                <p className='m-0 p-0 text-small font-bold text-center'>
                    Chat
                </p>
            </div>
        </div>
        <div className='chat-content-section text-dark'>
            {/*<Chat />*/}
        </div>
        <div className='chat-footer'>
            <div className='chat-footer-banner d-center gap-1 mb-1'>
                <FontAwesomeIcon
                    className='text-small'
                    color="black"
                    icon={faUser}
                />
                <p>Who can see your messages ?</p>
            </div>
            <div>
                <div className='text-dark d-flex justify-content-between'>
                    <div className='d-flex align-items-center gap-1'>
                        <p className='text-small'>To:</p>
                        <button className="chat-drop-btn d-center pointer">
                            <p className="p-0 m-0">Everyone</p>
                            <FontAwesomeIcon className="ml-1" color="white" icon={faChevronDown}/>
                        </button>
                    </div>
                    <div>
                        <p
                            className="text-dark m-0 p-0 pointer"
                            style={{
                                fontSize: 25,
                            }}
                        >
                            ☺
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <textarea
                    onKeyPress={(e) => {
                        composeMessage(e);
                    }}
                    style={{fontSize: '0.7rem'}}
                    value={messageSend}
                    onChange={(e) => setMessageSend(e.target.value.replace(/\n|\r/g, ''))}
                    className="chat-area"
                    placeholder="type a message here..."
                />
            </div>
        </div>
    </div>
}

export default ChatView
