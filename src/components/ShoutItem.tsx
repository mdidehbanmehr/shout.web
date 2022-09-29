import { Avatar, Comment, Tooltip } from "antd";
import React from "react";

export const ShoutItem: React.FC<{
  profilePicture: string;
  name: string;
  comment: string;
  submissionDate: Date;
}> = ({
  profilePicture,
  name,
  comment,
  submissionDate,
}: {
  profilePicture: string;
  name: string;
  comment: string;
  submissionDate: Date;
}) => {
  return (
    <Comment
      author={name}
      avatar={profilePicture ? <Avatar src={profilePicture} /> : <Avatar>{name[0]}</Avatar>}
      content={<p>{comment}</p>}
      datetime={
        <Tooltip title="2016-11-22 11:22:33">
          {submissionDate.toString()}
        </Tooltip>
      }
    />
  );
};
