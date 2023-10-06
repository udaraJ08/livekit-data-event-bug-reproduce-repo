import {Popover} from "react-tiny-popover";
import {useEnsureRoom} from "@livekit/components-react";
import {jsonParser} from "../../helpers/util";

const EmojiPalettePopover = ({emojiPopOverOpen}: any) => {

    const EmojiPalette = () => {

        const room = useEnsureRoom()

        return <div className={`popoverMenu`}>
            <div className='d-flex d-flex justify-content-between'>
                <p className='paletteItem'>👏</p>
                <p className='paletteItem'>👍</p>
                <p className='paletteItem'>😂</p>
                <p className='paletteItem'>😮</p>
                <p className='paletteItem'>💖</p>
            </div>
            <div className='mt-1'>
                <button
                    style={{
                        padding: '0px 20px'
                    }}
                    className='d-center w-100 raiseHandButton'>
                    <p className="p-0 m-0" style={{fontSize: 20, marginRight: 5}}>
                        ✋
                    </p>
                    <span>{jsonParser(room?.localParticipant?.metadata).raiseHand ? 'Lower Hand' : 'Raise Hand'}</span>
                </button>
            </div>
        </div>
    }

    return <Popover isOpen={emojiPopOverOpen} positions={['top']} content={EmojiPalette}>
        <div/>
    </Popover>
}

export default EmojiPalettePopover
