import { useState } from "react";

const HookUseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [details, setDetails] = useState({ name: "", age: 0 });

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  const handleNameChange = (e: any) => {
    setDetails({ ...details, name: e.target.value });
  };

  const handleAgeChange = (e: any) => {
    setDetails({ ...details, age: e.target.value });
  };
  return (
    <div>
      <h1>
        {name} has clicked : {count} many times
      </h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button onClick={increaseCount}>Increase count</button>
        <button onClick={decreaseCount}>Decrease count</button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <div style={{display:'flex', justifyContent:'space-around' , alignItems:'center'}}>
          <input type="text" value={details.name} onChange={handleNameChange} />
          <input type="number" value={details.age} onChange={handleAgeChange} />
        </div>
      </div>
    </div>
  );
};

export default HookUseState;
