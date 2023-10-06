import React from 'react';
import { SVGPropsInterface } from './SVGPropsInterface';

const WhiteBoardIco = ({ width, height, color }: SVGPropsInterface) => {
  return (
    <svg width={`${width}em`} height={`${height}em`} viewBox="0 0 31 31" fill={color}>
      <path
        d="M24.25 18.4166H13.3125L16.2291 15.5H24.25M6.74996 18.4166V14.7708L16.7833 4.76663C17.0604 4.48954 17.527 4.48954 17.8187 4.76663L20.3854 7.34788C20.677 7.63954 20.677 8.09163 20.3854 8.38329L10.352 18.4166M27.1666 0.916626H3.83329C3.05974 0.916626 2.31788 1.22392 1.7709 1.7709C1.22392 2.31788 0.916626 3.05974 0.916626 3.83329V30.0833L6.74996 24.25H27.1666C27.9402 24.25 28.682 23.9427 29.229 23.3957C29.776 22.8487 30.0833 22.1068 30.0833 21.3333V3.83329C30.0833 3.05974 29.776 2.31788 29.229 1.7709C28.682 1.22392 27.9402 0.916626 27.1666 0.916626Z"
        fill={color}
      />
    </svg>
  );
};

export default WhiteBoardIco;