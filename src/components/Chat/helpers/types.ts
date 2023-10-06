import {Room} from "livekit-client";
import {MessageQueueProps} from "./utils";

export interface ChatProps {
    room?: Room
    publishMessage: Function
    setMessage: Function
    message: string,
    queue: MessageQueueProps[],
}

export interface ChatBubbleProps {
    message: string,
    avatar?: string
}

export interface ParticipantDropItem {
    label: string,
    value: any,
}

export interface AudienceStateInterface {
    audience: string
    name: string,
    rev_sid: string
}

export const ENTER = "Enter"

export const EVERYONE = "EVERYONE"
