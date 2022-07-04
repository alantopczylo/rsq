import React from "react";
import { css, jsx } from "@emotion/css";

const SliderContent = (props) => (
  <div
    css={css`
      transform: translateX(-${props.translate}px);
      transition: transform ease-out ${props.transition}s;
      height: 100%;
      width: ${props.width}px;
      display: flex;
      background-color: red;
    `}
  >
    {props.children}
  </div>
);

export default SliderContent;
