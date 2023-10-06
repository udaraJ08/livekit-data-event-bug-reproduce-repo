import {useState} from "react";

const HomePage = ({setRoomToken}: any) => {

    const [token, setToken] = useState('')

    return <div className='full-page d-center bg-brand-black'>
        <div className='w-25 h-75 d-center flex-column bg-brand-black-mid p-3 radius-10'>
            <div className='w-100 mb-1'>
                <label htmlFor='txtToken'>Enter Token</label>
            </div>
            <textarea value={token} onChange={e => setToken(e.target.value)} id='txtToken' placeholder='token here...' className='custom-input w-100'/>
            <button
                onClick={() => setRoomToken(token)}
                className='submit-btn mt-3'>SUBMIT</button>
        </div>
    </div>
}

export default HomePage
