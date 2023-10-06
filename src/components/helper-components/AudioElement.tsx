import {displayNameSplitter} from "../../helpers/util";
import {AudioTrack, TrackMutedIndicator, useRemoteParticipant, VideoTrack} from "@livekit/components-react";
import {Track} from "livekit-client";
import React from "react";

interface Props {
    track: any;
}


const AudioElement = ({track}: Props) => {

    const participantName = displayNameSplitter(track?.participant?.identity)

    const participant = useRemoteParticipant(track?.participant?.identity);

    return <div className="w-100 relative">
        {participant?.isCameraEnabled ? <VideoTrack {...track} /> : <div className='w-100 h-100 bg-brand-black-mid d-center'>
            {participantName}
        </div>}
        <AudioTrack source={Track.Source.Microphone} participant={track?.participant}/>
        <div className={'participant-indicators w-100'}>
            <p>{participantName}</p>
            <div style={{ display: 'flex' }}>
                <TrackMutedIndicator source={Track.Source.Microphone} />
                <TrackMutedIndicator source={track.source} />
            </div>
        </div>
    </div>
}

export default AudioElement
