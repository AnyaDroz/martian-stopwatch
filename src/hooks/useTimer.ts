import { useEffect } from "react";

export const useTimer = (
  callback: () => void,
  interval: number,
  isCounting: boolean,
) => {
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isCounting) {
      intervalId = setInterval(callback, interval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isCounting]);
};
