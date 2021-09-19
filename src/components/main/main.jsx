import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllMessages, postNewMessage, sendMockMessage} from "../../store/action";
import {makeGetMessagesSelector} from "../../store/selectors";
import Controls from "../controls/controls";
import MessagesList from "../messages-list/messages-list";

const Main = () => {

  const getMessages = useMemo(makeGetMessagesSelector, []);
  const messages = useSelector((state) => getMessages(state));

  const dispatch = useDispatch();

  const [isListVisible, setIsListVisible] = useState(false);

  const handleSubmit = (newMessage) => dispatch(postNewMessage(newMessage));

  const handleDeleteAll = () => dispatch(deleteAllMessages());

  useEffect(() => {
    // const id = setInterval(() => dispatch(postNewMessage(`New Message ${messages.length + 1}`)), 2000);
    dispatch(sendMockMessage());

    // return () => clearTimeout(sendMockMessage());
  }, [messages]);

  return (
    <div className="main-container">
      <div className="board">
        <div className="board__header header">
          <div
            className="header__icon"
            onClick={() => setIsListVisible(!isListVisible)}>
            { (messages.length > 0) && <div className="header__icon-indicator">{messages.length}</div> }
          </div>
        </div>

        <div className="board__main">
          <Controls
            handleSubmit={handleSubmit}
            isListVisible={isListVisible}
            setIsListVisible={setIsListVisible}
            handleDeleteAll={handleDeleteAll} />

          { (isListVisible && <MessagesList messages={messages} />) }
        </div>
      </div>
    </div>
  );
};

export default Main;
