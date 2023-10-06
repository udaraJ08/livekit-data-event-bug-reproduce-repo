import '../../assets/css/topBar.css'
import {faSquare, faThLarge} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useRemoteParticipants, useTracks} from "@livekit/components-react";
import {Track} from "livekit-client";
import {useDispatch, useSelector} from "react-redux";
import {AppReducerSelectorType} from "../../views/redux/types";
import {GRID_LAYOUT, SPEAKER_LAYOUT} from "../../helpers/constants";
import {appActions} from "../../views/redux/app.slice";

const TopBar = () => {

    const {layout} = useSelector((state: AppReducerSelectorType) => state.appReducer)

    const remoteParticipants = useRemoteParticipants()
    const screenShareTrack = useTracks([Track.Source.ScreenShare])[0];

    const dispatch = useDispatch()

    const handleLayout = (layout: string) => {
        dispatch(appActions.layoutHandle(layout))
    }

    return <div className='topBar bg-brand-black d-flex justify-content-end gap-1 align-items-center'>
        {remoteParticipants.length > 0 && !screenShareTrack && <div className='d-flex gap-1 pr-2 text-info'>
            {layout === SPEAKER_LAYOUT &&
            <FontAwesomeIcon onClick={() => handleLayout(GRID_LAYOUT)} className='clickable-mini' title='Grid layout'
                             height={32} icon={faThLarge}/>}
            {layout === GRID_LAYOUT &&
            <FontAwesomeIcon onClick={() => handleLayout(SPEAKER_LAYOUT)} className='clickable-mini'
                             title='Speaker layout' height={32} icon={faSquare}/>}
        </div>}
    </div>
}

export default TopBar
