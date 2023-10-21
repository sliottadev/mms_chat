import * as React from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";

function MenuIcon(props) {
    console.log(props)
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 30 30"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_429_11122)">
        <Rect
          x="10"
          y="5"
          width="20"
          height="4"
          stroke-width="4" 
          stroke-linejoin="round"
        />
        <Rect
          x="10"
          y="15"
          width="20"
          height="4"
          stroke-width="4" 
          stroke-linejoin="round"
        />
        <Rect
          x="10"
          y="25"
          width="20"
          height="4"
          stroke-width="4" 
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_429_11122">
          <Rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0 0.000915527)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default MenuIcon;
