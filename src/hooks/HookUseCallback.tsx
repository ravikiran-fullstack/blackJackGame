/*  Memoization 
    It is also a technique for improving the performance of the code like using useMemo

    * useCallback is used to return memoized function(not the return value)

    * it is also useful for preventing functions from being re-created on re-rendering
*/

import { useState } from "react";
import Component1 from "../components/Component1";

const HookUseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const handleFunc1 = () => {
    console.log("func1");
  };
  return (
    <div>
      <div>HookUseCallback: {toggle}</div>
      <Component1 func1={handleFunc1} />
      <button onClick={() => setToggle(prev => !prev)}>Toggle</button>
    </div>
  );
};

export default HookUseCallback;
