import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAllMessages, postNewMessage} from "../../store/action";
import {makeGetMessagesSelector} from "../../store/selectors";
import Controls from "../controls/controls";
import MessagesList from "../messages-list/messages-list";

const debounce = (cb) => {
  let lastTimeout = null;

  return (...parameters) => {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(() => cb(...parameters), 500);
  };
};

const Main = () => {

  const getMessages = useMemo(makeGetMessagesSelector, []);
  const messages = useSelector((state) => getMessages(state));

  const visibleMessagesNum = useSelector((state) => state.visibleMessagesNum);

  const dispatch = useDispatch();

  const [isListVisible, setIsListVisible] = useState(false);
  const [isFullListShown, setIsFullListShown] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const handleSubmit = useCallback(
      (newMessage) => dispatch(postNewMessage(newMessage)),
      []
  );

  const handleDeleteAll = useCallback(
      () => {
        dispatch(deleteAllMessages());
        clearTimeout(timerId);
        setTimerId(null);
        if (isListVisible) {
          setIsListVisible(!isListVisible);
          setIsFullListShown(false);
        }
      }, [timerId]
  );
  const debouncedHandleDeleteAll = debounce(() => handleDeleteAll());

  const handlePopupToggleClick = useCallback(
      () => {
        setIsListVisible(!isListVisible);
        setIsFullListShown(false);
      }, [isListVisible, isFullListShown]
  );

  useEffect(() => {
    // setTimerId(() => setTimeout(() => dispatch(postNewMessage(`New Message ${messages.length + 1}`)), 2000));
  }, [messages]);

  return (
    <div className="main-container">
      <div className="board">
        <div className="board__header header">
          <div
            className="header__icon"
            onClick={() => handlePopupToggleClick()}>
            { (messages.length > 0) && <div className="header__icon-indicator">{messages.length}</div> }
          </div>
        </div>

        <div className="board__main">
          <Controls
            handleSubmit={handleSubmit}
            handleDeleteAll={debouncedHandleDeleteAll}
            handlePopupToggleClick={handlePopupToggleClick}
          />

          {
            isListVisible &&
            <MessagesList
              messages={messages}
              visibleMessagesNum={visibleMessagesNum}
              isFullListShown={isFullListShown}
              setIsFullListShown={setIsFullListShown}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Main;
