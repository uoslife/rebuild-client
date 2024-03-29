import {useState, useEffect, useMemo, useCallback} from 'react';

type Props = {
  isUsingStatus: boolean;
  remainingTime: number;
  seatStartTime: string;
};

const getTimeDifference = (targetDatetimeStr: string) => {
  const targetDatetime = new Date(
    parseInt(targetDatetimeStr.slice(0, 4)),
    parseInt(targetDatetimeStr.slice(4, 6)) - 1,
    parseInt(targetDatetimeStr.slice(6, 8)),
    parseInt(targetDatetimeStr.slice(8, 10)),
    parseInt(targetDatetimeStr.slice(10, 12)),
    parseInt(targetDatetimeStr.slice(12, 14)),
  );

  const currentDatetime = new Date();
  const timeDifferenceInSeconds = Math.floor(
    // @ts-ignore
    (currentDatetime - targetDatetime) / 1000,
  );

  const hours = Math.floor(timeDifferenceInSeconds / 3600);
  const minutes = Math.floor((timeDifferenceInSeconds % 3600) / 60);
  const seconds = timeDifferenceInSeconds % 60;

  return [hours, minutes, seconds];
};

const useLibraryDisplayTime = ({
  isUsingStatus,
  remainingTime,
  seatStartTime,
}: Props) => {
  const hourNotUsing = Math.floor(remainingTime / (60 * 60));
  const minuteNotUsing = Math.floor((remainingTime % 3600) / 60);
  const secondNotUsing = remainingTime % 60;

  const [hourInUsing, minuteInUsing, secondInUsing] = useMemo(
    () => getTimeDifference(seatStartTime),
    [seatStartTime],
  );

  const [hours, setHours] = useState(
    isUsingStatus ? hourInUsing : hourNotUsing,
  );
  const [minutes, setMinutes] = useState(
    isUsingStatus ? minuteInUsing : minuteNotUsing,
  );
  const [seconds, setSeconds] = useState(
    isUsingStatus ? secondInUsing : secondNotUsing,
  );
  useEffect(() => {
    if (!isUsingStatus) return () => null;
    const intervalId = setInterval(() => {
      // 초 카운트 업
      setSeconds(prevSeconds => prevSeconds + 1);

      // 분과 시간 업데이트
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(prevMinutes => prevMinutes + 1);
      }

      if (minutes === 59 && seconds === 59) {
        setMinutes(0);
        setHours(prevHours => prevHours + 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isUsingStatus, hours, minutes, seconds]);
  useEffect(() => {
    if (isUsingStatus) return () => null;
    const intervalId = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) return;
      setSeconds(prevSeconds => prevSeconds - 1);

      if (minutes === 0 && seconds === 0) {
        setMinutes(59);
        setHours(prevHours => prevHours - 1);
      }
      if (seconds === 0) {
        setSeconds(59);
        setMinutes(prevMinutes => prevMinutes - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isUsingStatus, hours, minutes, seconds]);

  const getDisplayTimeString = useCallback(() => {
    if (hours) return `${hours}시간 ${minutes}분 ${seconds}초`;
    if (minutes) return `${minutes}분 ${seconds}초`;
    return `${seconds}초`;
  }, [hours, minutes, seconds]);

  const displayTime = useMemo(
    () => getDisplayTimeString(),
    [getDisplayTimeString],
  );

  return {displayTime};
};

export default useLibraryDisplayTime;
