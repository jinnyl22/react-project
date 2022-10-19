import React, { useRef } from "react";

const Timer = () => {
  const timer = useRef();
  let now = new Date();
  //   console.log(now);
  let end = new Date("2022-10-19  00: 00: 00");
  let nowTime = now.getTime();
  console.log(nowTime);
  let endTime = end.getTime();
  console.log(endTime);

  let gapTime = nowTime - endTime;
  console.log(gapTime);

  return (
    <div>
      <span ref={timer}></span>
    </div>
  );
};

export default Timer;
