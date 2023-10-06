import {useEnsureRoom, useSpeakingParticipants, useTracks} from "@livekit/components-react";
import {Track, RoomEvent, DataPacket_Kind} from "livekit-client";
import TopBar from "../../components/TopBar/TopBar";
import ControlBar from "../../components/ControlBar/ControlBar";
import ChatView from "../../components/Chat/ChatView";
import {useSelector} from "react-redux";
import {GlobalReducerSelectorType} from "../../components/Chat/redux/types";
import {useEffect} from "react";
import Stage from "./Stage";

const Meeting = () => {

    const {chatOpen} = useSelector((state: GlobalReducerSelectorType) => state.globalReducer)

    const room = useEnsureRoom()

    const decoder = new TextDecoder();

    room?.on(RoomEvent.DataReceived, (payload, participant, kind ) => {

        const strData = decoder.decode(payload);
        const msg = JSON.parse(strData);

        console.log('reached: RoomEvent.DataReceived')
        console.log('kind: ', kind)
        console.log('payload: ', payload)
        console.log('strData: ', strData)
        console.log('msg: ', msg)
        console.log('+++++++++++++++++++++++++++++++')
        console.log('')
    })

    useEffect(() => {
        room?.localParticipant?.setCameraEnabled(false)
        room?.localParticipant?.setMicrophoneEnabled(false)
    }, [room])

    return <div className='h-100'>
        <TopBar />
        {chatOpen && <ChatView />}
        <Stage />
        <ControlBar />
    </div>
}

export default Meeting
