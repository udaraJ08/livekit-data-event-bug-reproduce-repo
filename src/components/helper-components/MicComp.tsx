import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faMicrophone, faMicrophoneSlash} from "@fortawesome/free-solid-svg-icons";
import React, {useRef, useState} from "react";
import {useEnsureRoom} from "@livekit/components-react";
import {AUDIO_INPUT, AUDIO_OUTPUT} from "../../helpers/constants";
import MicrophoneSourcesPopover from "../PopOvers/MicrophoneSourcesPopover";
import {toast} from "react-toastify";
import useOutsideClick from "../../helpers/hooks/useOutsideClick";

const MicComp = () => {

    const [open, setOpen] = useState(false)

    const room = useEnsureRoom()

    const ref = useRef(null)

    useOutsideClick(ref, () => setOpen(false))

    // check mic enable or disable
    const isMicEnable = () => {
        return room?.localParticipant?.isMicrophoneEnabled
    }

    // Handle microphone
    const handleMicrophone = () => {
        room?.localParticipant?.setMicrophoneEnabled(!isMicEnable())
    }

    // Microphone source change
    const onMicrophoneSourceChange = async (deviceId: string) => {

        try {
            await room?.switchActiveDevice(AUDIO_INPUT, deviceId)
        } catch (e: any) {
            toast.error('Microphone source is not compatible')
            toast.clearWaitingQueue()
        }
    }

    // Speaker source change
    const onSpeakerSourceChange = async (deviceId: string) => {

        try {
            await room?.switchActiveDevice(AUDIO_OUTPUT, deviceId)
        } catch (e: any) {
            toast.error('Speaker source is not compatible')
            toast.clearWaitingQueue()
        }
    }

    return <div ref={ref} className='relative'>
        <FontAwesomeIcon
            onClick={handleMicrophone}
            className="pointer"
            height={32}
            color="#bdc3c7"
            icon={isMicEnable() ? faMicrophone : faMicrophoneSlash}
        />
        <FontAwesomeIcon
            onClick={() => setOpen(!open)}
            className="absolute pointer mic-btn-cherv"
            color="#bdc3c7"
            icon={faChevronDown}
        />
        <MicrophoneSourcesPopover open={open} onMicrophoneSourceChange={onMicrophoneSourceChange}
                                  onSpeakerSourceChange={onSpeakerSourceChange}/>
    </div>
}

export default MicComp
