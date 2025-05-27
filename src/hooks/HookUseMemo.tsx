/*  Memoization 
    It is a technique for improving the performance of the code.

    it is useful to avoid expensive calculations on every render when the returned value is not changing on every render

    const memoCalculation = useMemo(callback, [dependency]);

    so useMemo memoizes output of an expensive function but not the function itself, we can use useCallback to memoize function itself
*/

import { useMemo, useState } from "react";

const HookUseMemo = () => {
  const [toggle, setToggle] = useState(false);
  const [num, setNum] = useState(0);

  const calculatedOut = useMemo(() => {
    return expensiveCalculation(num);
  }, [num]);

  function expensiveCalculation(num: number): number {
    console.log("expensive calculation started ", num);
    for (let i = 0; i < 10000; i++) {
      console.log();
    }
    console.log("expensive calculation ended ", num);
    return num;
  }

  //   const result = expensiveCalculation(10);

  return (
    <div
      style={{
        width: "400px",
        height: "100px",
        color: `${toggle ? "black" : "white"}`,
        backgroundColor: `${toggle ? "white" : "black"}`,
      }}
    >
      HookUseMemo {calculatedOut}
      <button onClick={() => setToggle((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default HookUseMemo;
