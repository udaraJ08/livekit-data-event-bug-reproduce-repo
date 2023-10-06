import React from 'react';
import {SVGPropsInterface} from './SVGPropsInterface';

const ScreenShareIco = ({width, height, onClick}: SVGPropsInterface | any) => {
    return (
        <svg
            onClick={onClick}
            width={`${width}em`}
            height={`${height}em`}
            viewBox="0 0 35 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.3333 17.5833H14.4166V14.5C14.4166 14.0632 14.5646 13.6968 14.8606 13.4008C15.1556 13.1058 15.5215 12.9583 15.9583 12.9583H19.0416V16.0417L23.6666 11.4167L19.0416 6.79167V9.875H15.9583C14.6736 9.875 13.5816 10.3247 12.6823 11.224C11.7829 12.1233 11.3333 13.2153 11.3333 14.5V17.5833ZM2.08329 28.375C1.64649 28.375 1.2806 28.227 0.985626 27.931C0.689626 27.636 0.541626 27.2701 0.541626 26.8333C0.541626 26.3965 0.689626 26.0306 0.985626 25.7357C1.2806 25.4397 1.64649 25.2917 2.08329 25.2917H32.9166C33.3534 25.2917 33.7193 25.4397 34.0143 25.7357C34.3103 26.0306 34.4583 26.3965 34.4583 26.8333C34.4583 27.2701 34.3103 27.636 34.0143 27.931C33.7193 28.227 33.3534 28.375 32.9166 28.375H2.08329ZM5.16663 23.75C4.31871 23.75 3.5931 23.4483 2.98979 22.845C2.38546 22.2407 2.08329 21.5146 2.08329 20.6667V3.70833C2.08329 2.86042 2.38546 2.13429 2.98979 1.52996C3.5931 0.926653 4.31871 0.625 5.16663 0.625H29.8333C30.6812 0.625 31.4073 0.926653 32.0117 1.52996C32.615 2.13429 32.9166 2.86042 32.9166 3.70833V20.6667C32.9166 21.5146 32.615 22.2407 32.0117 22.845C31.4073 23.4483 30.6812 23.75 29.8333 23.75H5.16663Z"
                fill="#0ABC5C"
            />
        </svg>
    );
};

export default ScreenShareIco;