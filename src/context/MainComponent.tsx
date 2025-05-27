/* useContext is a hook in react, used to manage global data such as Global state, Services, Themes, User settings */

/* Using useContext hooks requires three steps: 
    1> Creating a Context
    2> Providing a Context
    3> Consuming the Context
*/

import SinglePost from "./SinglePost";

import { LoginContextProvider } from "./LoginContext";


const MainComponent = () => {
  return (
    <LoginContextProvider>
      <div>
        <SinglePost />
      </div>
    </LoginContextProvider>
  );
};

export default MainComponent;
