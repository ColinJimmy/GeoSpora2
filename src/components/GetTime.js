import { useEffect, useState } from "react";

const GetTime = ({ timezone }) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDateState(new Date()), 1000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="datetime">
      <div className="date">
        {new Intl.DateTimeFormat("en-US", {
          timeZone: timezone || "UTC", // Default to UTC if no timezone
          weekday: "long",
          month: "long",
          day: "2-digit",
        }).format(dateState)}
      </div>
      <div className="time">
        {new Intl.DateTimeFormat("en-US", {
          timeZone: timezone || "UTC", // Default to UTC if no timezone
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(dateState)}
      </div>
    </div>
  );
};

export default GetTime;
