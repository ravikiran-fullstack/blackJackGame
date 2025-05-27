/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useLayoutEffect, useRef, useState } from "react";

/*
    STEP 1.React calculates the component
    STEP 2.Code inside the useLayoutEffect runs
    STEP 3.React prints all elements in the component
    STEP 4.Code inside the useEffect runs
*/

const HookUseLayoutEffect = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    console.log("useEffect");
    console.log(buttonRef);
    buttonRef.current?.style.setProperty("border", '1px solid red');

    console.log(buttonRef.current?.getBoundingClientRect())
    return () => {
      console.log("return of useEffect");
    };
  }, [buttonToggle]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(buttonRef);
     buttonRef.current?.style.setProperty("border", '1px solid green');
    return () => {
      console.log("return of useLayoutEffect");
    };
  }, [buttonToggle]);

  return (
    <div>
      <div>HookUseLayoutEffect</div>    
      <div>
        <button
          ref={buttonRef}
          onClick={(_e) => setButtonToggle((prev) => !prev)}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default HookUseLayoutEffect;
