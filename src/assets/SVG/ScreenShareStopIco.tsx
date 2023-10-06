import React from 'react';
import { SVGPropsInterface } from './SVGPropsInterface';

const ScreenShareStopIco = ({ width, height, onClick }: SVGPropsInterface | any) => {
  return (
    <svg
      onClick={onClick}
      width={`${width}em`}
      height={`${height}em`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <path
        fill="#ff4757"
        d="M3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l2.146-2.147a.5.5 0 0 1 .708.708L8.707 8l2.147 2.146a.5.5 0 0 1-.708.708L8 8.707l-2.146 2.147a.5.5 0 0 1-.708-.707L7.293 8L5.146 5.854a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
};

export default ScreenShareStopIco;
