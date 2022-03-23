import React, { createContext } from "react";
import ParentContextExp from "./components/Hooks/ParentContext";

export const UserContext = createContext();
export const User1Context = createContext();

const UserInfo = {
  name: "Monu Chauhan",
  loggedIn: "true",
};

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={UserInfo}>
      <User1Context.Provider value={"NNNNNNNNNNNNUser1Info"}>
        


        {/* <ParentContextExp UserInfo={UserInfo} /> */}
        <ParentContextExp />

      </User1Context.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
