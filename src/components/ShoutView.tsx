import { Button } from "antd";
import React, { useState } from "react";
import { googleLogin, useGetShouts, useGetUser } from "../hooks/shout";
import { StyleSheet } from "../models/StyleSheet";
import { Conditional } from "./Conditional";
import { HeaderBar } from "./Header";
import { ShoutItem } from "./ShoutItem";
import { SubmitShout } from "./SubmitShout";

export const ShoutView = () => {
  const [submit, setsubmitted] = useState(false);

  let { data: shouts } = useGetShouts(submit);
  const login = () => {
    console.log("login attempted");
    googleLogin();
  };
  let { data: user } = useGetUser();
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
              submissionDate={shout.createdAt}
              profilePicture={shout.profilePicture}></ShoutItem>
          );
        })}
      </div>
      <Conditional
        condition={user ? true : false}
        trueRender={
          <SubmitShout
            change={submit}
            setChange={setsubmitted}
            user={user}></SubmitShout>
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
