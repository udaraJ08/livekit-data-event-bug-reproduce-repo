import {Popover} from "react-tiny-popover";
import {ADMIN, STREAM_MUTE, STREAM_UNMUTE_ALL} from "../../helpers/constants";
import {jsonParser} from "../../helpers/util";
import {useState} from "react";
import axios from "../../axios/axios";
import { DataPacket_Kind } from 'livekit-client';
import {useEnsureRoom} from "@livekit/components-react";

interface Props {
    open: boolean,
    isInviteOpen: boolean
}

const ParticipantPopover = ({open, isInviteOpen}: Props) => {

    // WaitingRoom Handle State
    const [waitingRoom, setWaitingRoom] = useState(false);
    const [lockRoom, setLockRoom] = useState(false);

    const room = useEnsureRoom()

    const blockRoom = async () => {
        await axios
            .put(
                `/room/block/${room.name}`,
                {
                    isRoomBlocked: !jsonParser(room?.metadata)?.isRoomBlocked,
                    metaData: {
                        ...jsonParser(room?.metadata),
                        isRoomBlocked: !jsonParser(room?.metadata)?.isRoomBlocked,
                    },
                },
            )
            .then(() => setLockRoom(!lockRoom))
            .catch((err) => {
                console.error(err.message);
            });
    };

    // USE THIS TO HANDLE MUTE PARTICIPANT ON ENTRY
    const handleMuteParticipantOnEntry = async () => {
        await axios
            .put(
                `/room/muteParticipant/${room.name}`,
                {
                    muteParticipantOnEntry: !jsonParser(room?.metadata)?.muteParticipantOnEntry,
                    metaData: {
                        ...jsonParser(room?.metadata),
                        muteParticipantOnEntry: !jsonParser(room?.metadata)?.muteParticipantOnEntry,
                    },
                },
            )
            .then(() => setLockRoom(!lockRoom))
            .catch((err) => {
                console.error(err.message);
            });
    };

    // Use this to block video of participants
    const blockVideoParticipant = async () => {
        await axios
            .put(
                `/room/blockShareScreen/${room.name}`,
                {
                    metaData: {
                        ...jsonParser(room?.metadata),
                        // blockVideo: !jsonParser(room?.metadata)?.blockVideo,
                        shareWebcamBlock: !jsonParser(room?.metadata)?.shareWebcamBlock,
                    },
                },
            )
            .then(() => setWaitingRoom(!waitingRoom))
            .catch((err) => {
                console.error(err.message);
            });
    };

    // Use this to block video of participants
    const handleMuteAll = async () => {
        await axios
            .put(
                `/room/blockShareScreen/${room.name}`,
                {
                    metaData: {
                        ...jsonParser(room?.metadata),
                        // blockVideo: !jsonParser(room?.metadata)?.blockVideo,
                        shareMicrophoneBlock: !jsonParser(room?.metadata)?.shareMicrophoneBlock,
                        muteParticipantOnEntry: !jsonParser(room?.metadata)?.muteParticipantOnEntry,
                    },
                },
            )
            .then(() => setWaitingRoom(!waitingRoom))
            .catch((err) => {
                console.error(err.message);
            });
    };

    // Use this to handle the waiting room status
    const handleWaitingRoom = async () => {
        await axios
            .put(
                `/room/waiting/${room.name}`,
                {
                    isEnableWaitingRoom: !waitingRoom,
                    metaData: {
                        ...jsonParser(room?.metadata),
                        isWaitingRoomEnabled: !waitingRoom,
                    },
                },
            )
            .then(() => setWaitingRoom(!waitingRoom))
            .catch((err) => {
                console.error(err.message);
            });
    };

    // Mute all the participants
    const publishMuteAll = async () => {
        const strData = JSON.stringify({
            data: STREAM_MUTE,
            receiver: 'EVERYONE',
            stream: STREAM_MUTE,
        });
        const encoder = new TextEncoder();

        const data = encoder.encode(strData);

        // eslint-disable-next-line camelcase
        await room?.localParticipant.publishData(data, DataPacket_Kind.RELIABLE);
        await handleMuteParticipantOnEntry();
        await handleMuteAll();
    };

    // Mute all the participants
    // @ts-ignore
    const publishUnMuteMessageToAll = async () => {
        const strData = JSON.stringify({
            stream: STREAM_UNMUTE_ALL,
        });
        const encoder = new TextEncoder();

        const data = encoder.encode(strData);

        // eslint-disable-next-line camelcase
        await room?.localParticipant.publishData(data, DataPacket_Kind.RELIABLE);
    };

    // const copyInviteLink = () => {
    //   // const hasPasscode = jsonParser(room?.metadata)?.roomPassCode;
    //   // const meta = jsonParser(room?.metadata);
    //
    //   navigator.clipboard.writeText(
    //     `${window.location.origin}/#/pre-room?rid=${room.name}`,
    //     // ${hasPasscode ? `passcode: ${jsonParser(room?.metadata)?.roomPassword}` : ''}`.trim(),
    //     // );
    //   );
    // };

    const copyInviteLink = () => {
        const hasPasscode = jsonParser(room?.metadata)?.roomPassCode;
        const meta = jsonParser(room?.metadata);

        navigator.clipboard.writeText(
            `Your meeting URL:- ${meta?.meetingInviteLink}${hasPasscode ? '' : ''}
    ${hasPasscode ? `passcode: ${jsonParser(room?.metadata)?.roomPassword}` : ''}`.trim(),
        );
    };

    const getPopList = () => {
        return [
            {
                topic: '',
                items: [
                    {
                        label: 'invite',
                        onClick: isInviteOpen,
                        hidden: false,
                    },
                    {
                        label: 'Copy Invite Link',
                        onClick: copyInviteLink,
                        hidden: false,
                    },
                ],
            },
            {
                topic: 'More Options',
                role: ADMIN,
                items: [
                    {
                        label: `${jsonParser(room?.metadata)?.shareMicrophoneBlock ? '✔ ' : ''} Mute All`,
                        onClick: publishMuteAll,
                        role: ADMIN,
                    },
                    {
                        label: `${
                            jsonParser(room?.metadata)?.isWaitingRoomEnabled ? '✔ ' : ''
                        } Enable Waiting room`,
                        onClick: handleWaitingRoom,
                        role: ADMIN,
                    },
                    {
                        label: `${jsonParser(room?.metadata)?.isRoomBlocked ? '✔ ' : ''} Lock Meeting`,
                        onClick: blockRoom,
                        role: ADMIN,
                    },
                ],
            },
        ];
    };

    const actionHandler = (role: string) => {
        if (!role) return true;

        return jsonParser(room?.localParticipant?.metadata)?.role === role;
    };

    const participantPopover = () => {
        return (
            <div className={`popoverMenu`}>
                <div className='list'>
                    {getPopList()?.map((item: any, i: number) => {
                        return (
                            actionHandler(item?.role) && (
                                <div key={i}>
                                    <p className="m-0 mt-2 mb-1 font-bold" style={{ fontSize: 12 }}>
                                        {item.topic}
                                    </p>
                                    <div className='listStyleNone'>
                                        {item?.items?.map((e: any, index: number) => {
                                            return (
                                                actionHandler(e?.role) &&
                                                !e.hidden && (
                                                    <div onClick={e.onClick} className='popOverItem' key={index}>
                                                        {e?.label}
                                                    </div>
                                                )
                                            );
                                        })}
                                    </div>
                                    {i !== getPopList().length - 1 &&
                                    jsonParser(room?.localParticipant?.metadata)?.role === ADMIN && (
                                        <hr
                                            // hidden={jsonParser(room?.metadata)?.webLogOutUrl}
                                            hidden={true}
                                            style={{
                                                border: '1px solid #7f8c8d',
                                            }}
                                        />
                                    )}
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
        );
    };

    return <Popover isOpen={open} positions={['top']} content={participantPopover}>
        <div />
    </Popover>
}

export default ParticipantPopover
