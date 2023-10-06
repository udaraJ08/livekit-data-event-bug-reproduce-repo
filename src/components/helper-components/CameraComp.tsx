import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faVideo, faVideoSlash} from "@fortawesome/free-solid-svg-icons";
import React, {useRef, useState} from "react";
import {useEnsureRoom} from "@livekit/components-react";
import CameraSourcesPopover from "../PopOvers/CameraSourcesPopover";
import useOutsideClick from "../../helpers/hooks/useOutsideClick";
import {toast} from "react-toastify";
import {VIDEO_INPUT} from "../../helpers/constants";
import {Track} from "livekit-client";

const CameraComp = () => {

    const [vidOpen, setVidOpen] = useState(false)

    const ref = useRef(null)

    const room = useEnsureRoom()

    useOutsideClick(ref, () => setVidOpen(false))

    // check camera enable or disable
    const isCameraEnable = () => {
        return room?.localParticipant?.isCameraEnabled
    }

    // Handle camera
    const handleCamera = () => {
        room?.localParticipant?.setCameraEnabled(!isCameraEnable())
    }

    // Camera source change
    const onSourceChange = async (deviceId: string) => {
        try {
            await room?.switchActiveDevice(VIDEO_INPUT, deviceId)
        } catch (e: any) {
            toast.error('Video source is not compatible')
            toast.clearWaitingQueue()
        }
    }

    return <>
        <div className='relative' ref={ref}>
            <FontAwesomeIcon
                onClick={handleCamera}
                className="pointer"
                height={32}
                color="#bdc3c7"
                icon={isCameraEnable() ? faVideo : faVideoSlash}
            />
            <FontAwesomeIcon
                onClick={() => setVidOpen(!vidOpen)}
                className="absolute pointer video-btn-cherv pointer"
                color="#bdc3c7"
                icon={faChevronDown}
            />
            <CameraSourcesPopover
                onSourceChange={onSourceChange}
                open={vidOpen}/>
        </div>
    </>
}

export default CameraComp
