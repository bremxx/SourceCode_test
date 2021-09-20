import {nanoid} from "nanoid";
import React, {useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {ID_LENGTH} from "../../const";
import {debounce} from "../../utils";
import {deleteAllMessages, postNewMessage} from "../../store/action";
import {makeGetUnseenMessagesNumSelector} from "../../store/selectors";
import Controls from "../controls/controls";
import MessagesList from "../messages-list/messages-list";


const Main = () => {

  const getUnseenMessagesNum = useMemo(makeGetUnseenMessagesNumSelector, []);
  const unseenMessagesNum = useSelector((state) => getUnseenMessagesNum(state));

  const dispatch = useDispatch();

  const [isListVisible, setIsListVisible] = useState(false);
  const [isFullListShown, setIsFullListShown] = useState(false);

  const handleSubmit = useCallback(
      (newMessageText) => {
        const newMessage = {
          id: nanoid(ID_LENGTH),
          text: newMessageText,
          seen: isListVisible,
          createdAt: new Date().toISOString()
        };
        dispatch(postNewMessage(newMessage));
      },
      []
  );

  const handleDeleteAll = () => {
    dispatch(deleteAllMessages());
    if (isListVisible) {
      setIsListVisible(!isListVisible);
      setIsFullListShown(false);
    }
  };
  const debouncedHandleDeleteAll = useCallback(debounce(() => handleDeleteAll()), []);

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
            { (unseenMessagesNum > 0) && <div className="header__icon-indicator">{unseenMessagesNum}</div> }
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
