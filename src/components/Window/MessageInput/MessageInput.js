import React from "react";

import classes from "./MessageInput.css";

const MessageInput = (props) => {
  return (
    <div className={classes.MessageInput}>
      <form className={classes.Form}>
        <input
          type="text"
          value={props.value}
          placeholder="..."
          onChange={props.changed}
          className={classes.Input}
        />
        <button className={classes.SubmitButton} onClick={props.submit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
