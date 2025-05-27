import axios from "axios";
import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // useEffect without dependencies
  // useEffect with empty array
  // useEffect with variables
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const url = "https://jsonplaceholder.typicode.com/todos";

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      console.log("response.data", response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = `${count}`;
  });

  useEffect(() => {
    fetchData(url);
  }, [count]);

  useEffect(() => {
   const timeId =  setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
        clearTimeout(timeId);
    }
  });

  return (
    <div>
      <h2>{time} in seconds</h2>
      <div>{data && data.length}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increment: {count}
        </button>
      </div>
    </div>
  );
};

export default HookUseEffect;
