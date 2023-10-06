export interface MessageQueueProps {
    message: string,
    isLocal: boolean,
    participant: any,
    receiver: string,
    localUser?: string,
    localUserSid?: string,
    rev_sid: string
}



// @ts-ignore
const truncate:string = (size, message) => {
    return message.length>size ? message.substring(0,size).concat("..."):message
}
