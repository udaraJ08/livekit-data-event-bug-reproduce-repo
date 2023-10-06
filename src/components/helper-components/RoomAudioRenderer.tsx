import {AudioTrack, GridLayout, TrackContext, useEnsureRoom} from "@livekit/components-react";
import React from "react";
import ParticipantTileComp from "./ParticipantTileComp";
import AudioElement from "./AudioElement";

const RoomAudioRenderer = ({tracks}: any) => {

    return (
        <div className='lk-grid-layout'>
            <GridLayout tracks={tracks} className='h-100'>
                <TrackContext.Consumer>
                    {(track: any) => {
                        return track && <AudioElement track={track} />
                    }}
                </TrackContext.Consumer>
            </GridLayout>
        </div>
    );
}

export default RoomAudioRenderer
