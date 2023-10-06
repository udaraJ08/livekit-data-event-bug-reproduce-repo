import {useEffect, useState} from "react";
import {getDevices, isSelectedDevice} from "../../helpers/util";
import {VIDEO_INPUT} from "../../helpers/constants";
import {Popover} from "react-tiny-popover";
import {VideoSourcesPropsInterface} from "./Types/VideoSourcesProps.interface";
import {useEnsureRoom} from "@livekit/components-react";

const CameraSourcesPopover = ({open, onSourceChange}: VideoSourcesPropsInterface) => {

    const [vidDevices, setVidDevices] = useState([]);

    const room = useEnsureRoom()

    const handleGetDevices = async () => {
        setVidDevices(await getDevices(VIDEO_INPUT))
    }

    useEffect(() => {
        ( async () => {
            await handleGetDevices()
        } )();

        navigator?.mediaDevices?.addEventListener('devicechange', handleGetDevices);

        return () => navigator?.mediaDevices?.removeEventListener('devicechange', handleGetDevices);
    }, [])

    const Content = () => {

        return <div className={`popoverMenu`}>
            <div className='list'>
                <p className="m-0 mt-2 font-bold" style={{ fontSize: 12 }}>Video Options</p>
                <div className='pl-1'>
                    {
                        vidDevices?.map((e: any, i:number) => {
                            return <div key={i} onClick={() => onSourceChange(e?.id)}>
                                <p
                                    style={{
                                        color: isSelectedDevice(room, VIDEO_INPUT, e?.id) ? '#0fbcf9' : 'white',
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

export default CameraSourcesPopover
