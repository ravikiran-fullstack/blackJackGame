/*
    * Uses of useRef hook *
    -- useRef hook allows us to access the DOM elements.
        (It is very useful to directly access the DOM elements)
    -- And for creating mutable variables which will not be affected when we re-render the component.
        (is to create a mutable variable without causing the re-renders)
        (useRef allows us to create mutable variables which don't cause re-renders)
*/

import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  const [name, setName] = useState("");
  const ref = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current += 1;
    
  });
  console.log(inputRef.current?.value);
  return (
    <div>
      <div>HookUseRef</div>
      <div style={{ display: "flex", flexDirection: "column",border: "1px dotted gray", marginTop: '10px' }}>
        <h3>Name: {name}</h3>
        <input
          type="text"
          name="text"
          id="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column",border: "1px dotted gray", marginTop: '10px'}}>
        <h3>Age: {inputRef.current?.value}</h3>
        <input type="number" name="age" id="age" ref={inputRef} />
      </div>
      <div>
        <h4>Rendered Counts : {ref.current}</h4>
      </div>
    </div>
  );
};

export default HookUseRef;
