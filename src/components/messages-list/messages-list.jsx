import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {changeMessageSeenStatus} from "../../store/action";

const MessagesList = ({messages, isFullListShown, setIsFullListShown}) => {

  const visibleMessagesNum = useSelector((state) => state.visibleMessagesNum);

  const getVisibleMessages = () => (
    isFullListShown
      ? messages
      : messages.slice(0, visibleMessagesNum)
  );

  const messagesToShow = getVisibleMessages();

  const dispatch = useDispatch();

  useEffect(() =>
    messagesToShow.forEach((item) => {
      if (!item.seen) {
        dispatch(changeMessageSeenStatus(item.id, true));
      }
    }), [isFullListShown, messages]
  );

  return (
    <div className="board__list-container ">
      <ul className="board__list msg-list">
        {
          messagesToShow.map(
              (item, i) =>
                <li className="msg-list__item msg" key={`msg-${i}`}>
                  <div className="msg__title">{item.text}</div>
                  <div className="msg__time">sdgdgdf</div>
                </li>
          )
        }
      </ul>
      {
        (messages.length > visibleMessagesNum && !isFullListShown) &&
        <span
          className="msg-list__link"
          onClick={() => setIsFullListShown(true)}
        >Посмотреть все...</span>
      }
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  isFullListShown: PropTypes.bool.isRequired,
  setIsFullListShown: PropTypes.func.isRequired
};

export default MessagesList;
