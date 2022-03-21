import React from "react";
import ContextExp from "./ContextExp";
import { UserContext, User1Context } from "../../App";

// function ParentContextExp(props) {
function ParentContextExp() {
  //   console.log("UserInfo", props.UserInfo);

  const user = React.useContext(UserContext);
  const user1 = React.useContext(User1Context);

  return (
    <>
      <div>
        <h2>Hello Context from parent </h2>
        <h1>{user.name}</h1>
        <h1>{user1}</h1>
        <ContextExp />
      </div>
    </>
  );
}

export default ParentContextExp;
