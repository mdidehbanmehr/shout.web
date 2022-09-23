import React from "react";
import { useGetShouts } from "../hooks/shout";
import { StyleSheet } from "../models/StyleSheet";
import { HeaderBar } from "./Header";
import { ShoutItem } from "./ShoutItem";
import { SubmitShout } from "./SubmitShout";

export const ShoutView = () => {
  let { data: shouts, isLoading } = useGetShouts();

  return (
    <>
      <HeaderBar header={"Shouts"} text={"Below you can see people shouting"} />
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
      <SubmitShout></SubmitShout>
    </>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    justifyContent: "pace-between",
    marginLeft: "2%",
    // backgroundColor: "blue",
  },
});
