"use client";

import { useEffect, useState } from "react";

export function DhakaClock() {
  const [time, setTime] = useState<string>("--:--");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTime(formatter.format(new Date()));
      } catch {
        const now = new Date();
        setTime(now.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="tabular-nums font-mono">{time}</span>;
}
