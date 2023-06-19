import React, { useState, useEffect, useCallback } from "react";
import { ChromePicker } from "react-color";

const FontColor = () => {
  const [color, setColor] = useState("");

  useEffect(
    (label) => {
      if (!label.color) {
        // 받아온 레이블 컬러가 없으면
        setColor(""); // 걍 빈칸
      }
      setColor(label.color); // 데이터가 있으면 컬러로 세팅
    },
    [label]
  );

  const handleColorChange = useCallback(
    // 온체인지 이벤트를 담당할 함수다.
    (color) => {
      // 바뀌는 컬러값을 매개변수로 받아서
      setColor(color); // setColor 안에 넣어줘서 color 를 변경해줄거다.
    },
    [color]
  ); // 단 컬러 데이터가 바뀔때마다 이 함수는 갱신된다.

  return (
    <div>
      <ChromePicker onClick={handleColorChange} />
    </div>
  );
};

export default FontColor;
