import {useSelector} from "react-redux";
import {AppReducerSelectorType} from "../redux/types";
import {GRID_LAYOUT} from "../../helpers/constants";
import GridStage from "./GridStage";
import {useTracks} from "@livekit/components-react";
import {Track} from "livekit-client";

const Stage = () => {

    const {layout} = useSelector((state: AppReducerSelectorType) => state.appReducer)

    const cameraTracks = useTracks([{ source: Track.Source.Camera, withPlaceholder: true }]);

    const handleStage = () => {
        
        switch (layout) {
            case GRID_LAYOUT: return <GridStage tracks={cameraTracks}/>
            default: return <GridStage tracks={cameraTracks}/>
        }
    }

    return handleStage()
}

export default Stage
