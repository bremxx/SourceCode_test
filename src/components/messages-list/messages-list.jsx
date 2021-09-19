import React from "react";
import PropTypes from "prop-types";

const MessagesList = ({messages}) => {
  return (
    <div className="board__list-container ">
      <ul className="board__list msg-list">
        {
          messages.map(
              (item, i) =>
                <li className="msg-list__item msg" key={`msg-${i}`}>
                  <span className="msg__title">{item}</span>
                  <span className="msg__time">sdgdgdf</span>
                </li>
          )
        }
      </ul>
    </div>
  );
};

MessagesList.propTypes = {messages: PropTypes.array.isRequired};

export default MessagesList;
