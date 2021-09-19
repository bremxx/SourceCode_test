import React from "react";
import PropTypes from "prop-types";

const MessagesList = ({messages, visibleMessagesNum}) => {
  const getVisibleMessages = () => (
    messages.length < visibleMessagesNum
      ? messages
      : messages.slice(0, visibleMessagesNum)
  );

  const messagesToShow = getVisibleMessages();

  return (
    <div className="board__list-container ">
      <ul className="board__list msg-list">
        {
          messagesToShow.map(
              (item, i) =>
                <li className="msg-list__item msg" key={`msg-${i}`}>
                  <div className="msg__title">{item}</div>
                  <div className="msg__time">sdgdgdf</div>
                </li>
          )
        }
      </ul>
      { (messages.length > visibleMessagesNum) && <span className="msg-list__link">Посмотреть все...</span> }
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  visibleMessagesNum: PropTypes.number.isRequired
};

export default MessagesList;
