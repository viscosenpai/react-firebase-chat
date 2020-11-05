import React from "react";

import classes from "./MessageList.css";

const MessageList = (props) => {
  const messageList =
    props.messageList === undefined
      ? null
      : props.messageList.map((message, index) => (
          <li key={index}>{message}</li>
        ));
  return (
    <div className={classes.MessageList}>
      <h3>Messages</h3>
      <ul>{messageList}</ul>
    </div>
  );
};

export default MessageList;
