import React, { useState, useEffect, useMemo } from "react";
import { useFetchAllData, useSetData } from "../../firebase/firebaseDB";
import MessageList from "./MessageList/MessageList";
import MessageInput from "./MessageInput/MessageInput";

import classes from "./Window.css";
import { database } from "../../firebase";

const Window = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const { data } = useFetchAllData();
  // const dataList = useMemo(
  //   () => Object.entries(data || {}).map(([key, value]) => ({ key, value })),
  //   [data]
  // );

  useEffect(() => {
    setMessageList(data);
  }, [data]);

  const inputChangedHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitMessageHandler = (event) => {
    event.preventDefault();
    const oldMessageList = [...messageList];
    setMessageList(oldMessageList.concat(message));
    setMessage("");

    let ref = database.ref("/messages");
    ref.set([...oldMessageList, message]);
  };

  return (
    <div className={classes.Window}>
      <MessageInput
        value={message}
        changed={(event) => inputChangedHandler(event)}
        submit={(event) => submitMessageHandler(event)}
      />
      <MessageList messageList={messageList} />
    </div>
  );
};

export default Window;
