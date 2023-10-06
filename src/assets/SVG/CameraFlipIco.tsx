import React from 'react';
import { SVGPropsInterface } from './SVGPropsInterface';

const CameraFlipIco = ({ width, height }: SVGPropsInterface) => {
  return (
    <svg
      width={`${width}em`}
      height={`${height}em`}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="#0ABC5C"
        d="m16.25 10.5l-2.5 2.5l1.05 1.05l.65-.65q-.15 1.325-1.125 2.213q-.975.887-2.325.887q-.35 0-.65-.062q-.3-.063-.6-.188l-1.1 1.1q.525.3 1.113.475Q11.35 18 12 18q2 0 3.412-1.35q1.413-1.35 1.538-3.3l.75.7L18.75 13Zm-8.5 5l2.5-2.5l-1.05-1.05l-.65.65q.15-1.325 1.125-2.213Q10.65 9.5 12 9.5q.35 0 .65.062q.3.063.6.188l1.1-1.1q-.525-.3-1.112-.475Q12.65 8 12 8q-2 0-3.412 1.35q-1.413 1.35-1.538 3.3l-.75-.7L5.25 13ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L9 3h6l1.85 2H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Zm16-2V7h-4.05l-1.825-2h-4.25L8.05 7H4v12Zm-8-7Z"
      />
    </svg>
  );
};

export default CameraFlipIco;
