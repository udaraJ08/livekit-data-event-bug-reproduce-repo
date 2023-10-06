import Meeting from "./stage/Meeting";
import {LiveKitRoom, RoomAudioRenderer, StartAudio} from "@livekit/components-react";
import React from "react";

const WS_URL = 'wss://dev-vm-ha-0-do-sg-media-kit.cyber.lk'

const Room = ({token} : any) => {

    return <LiveKitRoom
        serverUrl={WS_URL}
        token={token}
        options={{
            adaptiveStream: true,
            dynacast: true,
            publishDefaults: {
                simulcast: true,
                screenShareSimulcastLayers: [],
            },
        }}
        audio={false}
        video={false}
    >
        <StartAudio label="Click to allow audio playback" />
        <RoomAudioRenderer />
        <Meeting />
    </LiveKitRoom>
}

export default Room
