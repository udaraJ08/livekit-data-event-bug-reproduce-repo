import {useEffect, useState} from "react";
import {getDevices, isSelectedDevice} from "../../helpers/util";
import {AUDIO_INPUT, AUDIO_OUTPUT, VIDEO_INPUT} from "../../helpers/constants";
import {Popover} from "react-tiny-popover";
import {MicrophoneSourcesPropsInterface} from "./Types/MicrophoneSourcesProps.interface";
import {useEnsureRoom} from "@livekit/components-react";

const MicrophoneSourcesPopover = ({open, onSpeakerSourceChange, onMicrophoneSourceChange}: MicrophoneSourcesPropsInterface) => {

    const [micDevices, setMicDevices] = useState([]);
    const [speakerDevices, setSpeakerDevices] = useState([]);

    const room = useEnsureRoom()

    const handleGetDevices = async () => {
        setMicDevices(await getDevices(AUDIO_INPUT))
        setSpeakerDevices(await getDevices(AUDIO_OUTPUT))
    }

    useEffect(() => {
        ( async () => {
            await handleGetDevices()
        } )();

        navigator?.mediaDevices?.addEventListener('devicechange', handleGetDevices);

        return () => {
            navigator?.mediaDevices?.removeEventListener('devicechange', handleGetDevices);
        };
    }, [])

    const Content = () => {

        return <div className={`popoverMenu`}>
            <div className='list'>
                <b className="m-0 mt-2" style={{ fontSize: 12 }}>Mic Options</b>
                <div className='pl-1'>
                    {
                        micDevices?.map((e: any, i:number) => {
                            return <div key={i} onClick={() => onMicrophoneSourceChange(e?.id)}>
                                <p
                                    style={{
                                        color: isSelectedDevice(room, AUDIO_INPUT, e?.id) ? '#0fbcf9' : 'white',
                                    }}
                                    className="mt-1 mb-0 popOverItem">
                                    {e?.label}
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>
            <hr />
            <div className='list'>
                <b className="m-0 mt-2" style={{ fontSize: 12 }}>Speaker Options</b>
                <br />
                <div className='pl-1'>
                    {
                        speakerDevices?.map((e: any, i:number) => {
                            return <div key={i} onClick={() => onSpeakerSourceChange(e?.id)}>
                                <p
                                    style={{
                                        color: isSelectedDevice(room, AUDIO_OUTPUT, e?.id) ? '#0fbcf9' : 'white',
                                    }}
                                    className="mt-1 mb-0 popOverItem">
                                    {e?.label}
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    }

    return <Popover isOpen={open} positions={['top']} content={Content}>
        <div />
    </Popover>
}

export default MicrophoneSourcesPopover
