import React from 'react';
import { SVGPropsInterface } from './SVGPropsInterface';

const ThreeDotsSVG = ({ width, height }: SVGPropsInterface) => {
  return (
    <div>
      <svg
        width={`${width}em`}
        height={`${height}em`}
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
        />
      </svg>
    </div>
  );
};

export default ThreeDotsSVG;
