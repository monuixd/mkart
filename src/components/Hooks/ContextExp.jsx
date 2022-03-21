import React, { useContext } from "react";
import { UserContext } from "../../App";

function ContextExp() {
  //console.log("CUserInfo", props.CUserInfo);
  const user = useContext(UserContext);
  return (
    <>
      <div>
        <h2>Hello Context from child </h2>
        <h1>{user.name}</h1>
      </div>
    </>
  );
}

export default ContextExp;
