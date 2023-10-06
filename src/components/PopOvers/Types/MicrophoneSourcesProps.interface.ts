export interface MicrophoneSourcesPropsInterface {
    open: boolean;
    onSpeakerSourceChange: (deviceId: string) => {}
    onMicrophoneSourceChange: (deviceId: string) => {}
}
