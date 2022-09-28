import { Button } from "antd";
import React, { useState } from "react";
import { googleLogin, useGetShouts } from "../hooks/shout";
import { StyleSheet } from "../models/StyleSheet";
import { Conditional } from "./Conditional";
import { HeaderBar } from "./Header";
import { ShoutItem } from "./ShoutItem";
import { SubmitShout } from "./SubmitShout";

export const ShoutView = () => {
  const [submit, setsubmitted] = useState(false);

  let { data: shouts } = useGetShouts(submit);
  console.log(shouts);

  const login = () => {
    console.log("login attempted");
    googleLogin();
  };

  return (
    <>
      <HeaderBar
        header={"Shoutbox"}
        text={"Shout or watch people shouting ಠ_ಠ"}
      />
      <div style={styles.commentContainer}>
        {shouts?.map((shout) => {
          return (
            <ShoutItem
              key={shout.id}
              name={shout.author}
              comment={shout.message}
              submissionDate={shout.createdAt}></ShoutItem>
          );
        })}
      </div>
      <Conditional
        condition={true}
        trueRender={
          <SubmitShout change={submit} setChange={setsubmitted}></SubmitShout>
        }
        falseRender={
          <Button type="primary" onClick={login}>
            Login
          </Button>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    justifyContent: "pace-between",
    marginLeft: "2%",
  },
});
