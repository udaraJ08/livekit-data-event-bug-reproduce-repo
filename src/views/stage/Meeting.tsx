import {GridLayout, TrackContext, useEnsureRoom, useTracks} from "@livekit/components-react";
import {RoomEvent, Track} from "livekit-client";
import TopBar from "../../components/TopBar/TopBar";
import ControlBar from "../../components/ControlBar/ControlBar";
import ChatView from "../../components/Chat/ChatView";
import React, {useEffect, useState} from "react";
import ParticipantTileComp from "../../components/helper-components/ParticipantTileComp";

const Meeting = () => {

    const [chatOpen, setChatOpen] = useState(false);
    const cameraTracks = useTracks([{ source: Track.Source.Camera, withPlaceholder: true }]);

    const room = useEnsureRoom()

    const decoder = new TextDecoder();

    useEffect(() => {
        room?.on(RoomEvent.DataReceived, (payload, participant, kind ) => {

            const strData = decoder.decode(payload);
            const msg = JSON.parse(strData);

            const currentDate = new Date();
            const unixTimestamp = Math.floor(currentDate.getTime() / 1000);
            console.log('Unix Timestamp:', unixTimestamp);
            console.trace();

            console.log('reached: RoomEvent.DataReceived')
            console.log('kind: ', kind)
            console.log('payload: ', payload)
            console.log('strData: ', strData)
            console.log('msg: ', msg)
            console.log('+++++++++++++++++++++++++++++++')
            console.log('')
        })
    }, [])

    useEffect(() => {
        room?.localParticipant?.setCameraEnabled(false)
        room?.localParticipant?.setMicrophoneEnabled(false)
    }, [room])

    return <div className='h-100'>
        <TopBar />
        {chatOpen && <ChatView setChatOpen={setChatOpen} chatOpen={chatOpen}/>}
        <div className='lk-grid-layout'>
            <GridLayout tracks={cameraTracks} className='h-100'>
                <TrackContext.Consumer>
                    {(track: any) => {
                        return track && <ParticipantTileComp track={track} />
                    }}
                </TrackContext.Consumer>
            </GridLayout>
        </div>
        <ControlBar chatOpen={chatOpen} setChatOpen={setChatOpen}/>
    </div>
}

export default Meeting
