import React from 'react';
import { Svg, Path } from 'react-native-svg';

const Hexagon = ({ strokeColor = '#72DD89', fillColor = 'white', ...props }) => (
  <Svg
    width="78"
    height="86"
    viewBox="0 0 78 86"
    fill="none"
    {...props}
  >
    <Path
      d="M35.1171 2.41404C37.5199 1.02682 40.4801 1.02682 42.8829 2.41403L71.8518 19.1393C74.2546 20.5265 75.7347 23.0902 75.7347 25.8646V59.3151C75.7347 62.0895 74.2546 64.6532 71.8518 66.0404L42.8829 82.7656C40.4801 84.1529 37.5199 84.1529 35.1171 82.7656L6.14816 66.0404C3.74544 64.6532 2.2653 62.0895 2.2653 59.3151L2.2653 25.8646C2.2653 23.0902 3.74544 20.5265 6.14815 19.1393L35.1171 2.41404Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2.74084"
    />
  </Svg>
);

export default Hexagon;