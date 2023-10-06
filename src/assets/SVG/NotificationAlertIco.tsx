import React from 'react';
import { SVGPropsInterface } from './SVGPropsInterface';

const NotificationAlertIco = ({ width, height, color }: SVGPropsInterface) => {
  return (
    <svg width={`${width}em`} height={`${height}em`} viewBox="0 0 31 31" fill={color}>
      <path d="M 17.998047 4 C 15.950547 4 13.903797 4.78175 12.341797 6.34375 L 10.355469 8.328125 C 9.2314687 9.452125 7.8955 10.327828 6.4375 10.923828 L 19.074219 23.560547 C 19.670219 22.102547 20.545922 20.767578 21.669922 19.642578 L 23.65625 17.65625 C 26.324968 14.987532 26.70531 10.906015 24.814453 7.8242188 A 2 2 0 0 0 26 6 A 2 2 0 0 0 24 4 A 2 2 0 0 0 22.175781 5.1855469 C 20.89741 4.4008197 19.449299 4 17.998047 4 z M 3.9902344 10.990234 A 1.0001 1.0001 0 0 0 3.2929688 12.707031 L 8.7167969 18.130859 A 2.5 2.5 0 0 0 7 20.5 A 2.5 2.5 0 0 0 9.5 23 A 2.5 2.5 0 0 0 11.871094 21.285156 L 17.292969 26.707031 A 1.0001 1.0001 0 1 0 18.707031 25.292969 L 4.7070312 11.292969 A 1.0001 1.0001 0 0 0 3.9902344 10.990234 z" />
    </svg>
  );
};

export default NotificationAlertIco;
