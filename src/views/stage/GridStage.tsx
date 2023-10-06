import {GridLayout, TrackContext} from "@livekit/components-react";
import React from "react";
import ParticipantTileComp from "../../components/helper-components/ParticipantTileComp";

interface Props {
    tracks: any;
}

const GridStage = ({tracks}: Props) => {

    return <div className='lk-grid-layout'>
        <GridLayout tracks={tracks} className='h-100'>
            <TrackContext.Consumer>
                {(track: any) => {
                    return track && <ParticipantTileComp track={track} />
                }}
            </TrackContext.Consumer>
        </GridLayout>
    </div>
}

export default GridStage
