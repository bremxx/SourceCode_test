import {nanoid} from "nanoid";
import React, {useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {ID_LENGTH} from "../../const";
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

  const dispatch = useDispatch();

  const [isListVisible, setIsListVisible] = useState(false);
  const [isFullListShown, setIsFullListShown] = useState(false);

  const handleSubmit = useCallback(
      (newMessageText) => {
        const newMessage = {
          id: nanoid(ID_LENGTH),
          text: newMessageText,
          seen: isListVisible
        };
        dispatch(postNewMessage(newMessage));
      },
      []
  );

  const handleDeleteAll = useCallback(
      () => {
        dispatch(deleteAllMessages());
        if (isListVisible) {
          setIsListVisible(!isListVisible);
          setIsFullListShown(false);
        }
      }, []
  );
  const debouncedHandleDeleteAll = debounce(() => handleDeleteAll());

  const handlePopupToggleClick = useCallback(
      () => {
        setIsListVisible(!isListVisible);
        setIsFullListShown(false);
      }, [isListVisible, isFullListShown]
  );


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
