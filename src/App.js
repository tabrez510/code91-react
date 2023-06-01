import React from 'react'
import EventHandler from "./components/eventHandler/EventHandler";
import UseState from "./components/useState/UseState";
import PackingList from "./components/conditionalRendering/PackingList"
import RenderingList from "./components/renderingList/RenderingList";
import Parent from "./components/methodProp/Parent";
import Clicked from "./lecture2/HOC/Clicked";
import Hover from "./lecture2/HOC/Hover";
import A from "./lecture2/useContext/A";
import UseReducer1 from './lecture2/useReducer/UseReducer1';
import UseReducer2 from './lecture2/useReducer/UseReducer2';
import UseReducer3 from './lecture2/useReducer/UseReducer3';

export const firstName = React.createContext();
export const lastName = React.createContext();

function App() {
  return (
    <>
      {/* <EventHandler /> */}
      {/* <UseState /> */}
      {/* <PackingList /> */}
      {/* <RenderingList /> */}
      {/* <Parent /> */}
      {/* <Clicked />
      <Hover /> */}

      {/* <firstName.Provider value={'tabrez'}>
        <lastName.Provider value= {'alam'}>
          <A />
        </lastName.Provider>
      </firstName.Provider> */}
      {/* <UseReducer1 /> */}
      {/* <UseReducer2 /> */}
      <UseReducer3 />
    </>
  );
}

export default App;
