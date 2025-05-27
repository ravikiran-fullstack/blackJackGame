/* useContext is a hook in react, used to manage global data such as Global state, Services, Themes, User settings */

/* Using useContext hooks requires three steps: 
    1> Creating a Context
    2> Providing a Context
    3> Consuming the Context
*/

import { useContext } from "react";
import { LoginContext } from "./LoginContext";

const SinglePost = () => {
  const context = useContext(LoginContext);
  console.log(context);
  return <div>SinglePost : {context.test}</div>;
};

export default SinglePost;
