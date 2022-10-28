import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState();

  let now = new Date();
  //   console.log(now);
  let end = new Date("2022-10-28 12:25:00");
  let nowTime = now.getTime();
  // console.log(nowTime);
  let endTime = end.getTime();
  // console.log(endTime);

  let gapTime = endTime - nowTime;
  // console.log(gapTime);

  let sec = Math.floor((gapTime / 1000) % 60);
  console.log(sec);

  let min = Math.floor((gapTime / (1000 * 60)) % 60);
  console.log(min);

  let hour = Math.floor((gapTime / (1000 * 60 * 60)) % 24);
  console.log(hour);

  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  console.log(timer);

  // useEffect(() => {
  //   if (gapTime > 0) {
  //     setInterval(() => {
  //       setTimer({ hour, min, sec });
  //     }, 1000);
  //   }
  // });

  if (gapTime > 0) {
    setTimeout(() => {
      setTimer({ hour, min, sec });
    }, 1000);
  }

  return (
    <div>
      <span>
        {timer && timer.hour ? (
          <>
            {gapTime > 0 ? (
              <>
                {timer && timer.hour} : {timer && timer.min} : {timer && timer.sec}
              </>
            ) : (
              <>종료!</>
            )}
          </>
        ) : (
          <></>
        )}
      </span>
    </div>
  );
};

export default Timer;
