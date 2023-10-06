import React from 'react';
import { SVGPropsInterface } from './SVGPropsInterface';

const PollingIco = ({ width, height }: SVGPropsInterface) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M6 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V3ZM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0V9Zm10-2a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0V7Z"
      />
    </svg>
  );
};

export default PollingIco;
