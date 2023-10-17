export interface MessageQueueProps {
    message: string,
    isLocal: boolean,
    participant: any,
    receiver: string,
    localUser?: string,
    localUserSid?: string,
    rev_sid: string
}
