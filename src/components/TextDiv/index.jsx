import React from "react";
import * as S from "src/components/TextDiv/styled"

const TextDivComp = React.forwardRef((props, ref) => {
  const setPosition = (e) => {
    e.target.style.position = "absolute"
    e.target.style.left = e.clientX + "px"
    e.target.style.top = e.clientY + "px"
  }
  return (
    <S.TDiv draggable onDragEnd={setPosition} ref={ref}>
      {props.fieldName}
    </S.TDiv>
  );
});

export const TextDiv = React.memo(TextDivComp);

