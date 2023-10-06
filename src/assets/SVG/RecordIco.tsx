import React from 'react';
import { SVGPropsInterface } from './SVGPropsInterface';

const RecordIco = ({ width, height, color }: SVGPropsInterface) => {
  return (
    <svg
      width={`${width}em`}
      height={`${height}em`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <g fill={color}>
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" />
      </g>
    </svg>
  );
};

export default RecordIco;
