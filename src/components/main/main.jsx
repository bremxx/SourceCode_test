import React, {useMemo, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postNewMessage} from "../../store/action";
import {makeGetMessagesSelector} from "../../store/selectors";

const Main = () => {

  const getMessages = useMemo(makeGetMessagesSelector, []);
  const messages = useSelector((state) => getMessages(state));

  const dispatch = useDispatch();
  const messageRef = useRef();

  const handleSubmit = (newMessage) => {
    dispatch(postNewMessage(newMessage));
  };

  return (
    <div className="main-container">
      <div className="board">
        <div className="board__header header">
          <div className="header__icon"></div>
        </div>

        <div className="board__main">
          <div className="board__controls controls">
            <form
              className="controls__item"
              onSubmit={(evt) => {
                evt.preventDefault();
                handleSubmit(messageRef.current.value);
              }}>
              <input className="input" ref={messageRef} type="text" placeholder="Ведите название события"></input>
              <button className="btn btn-submit" type="submit">Отправить</button>
            </form>
            <button className="controls__item btn btn-read-all" type="button">Пометить все события прочитанными</button>
            <button className="controls__item btn btn-delete-all" type="button">Удалить все события</button>
            <button className="controls__item btn btn-show-popup" type="button">Скрыть/показать попап нотификаций</button>
          </div>

          <div className="board__list-container ">
            <ul className="msg-list">
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

        </div>
      </div>
    </div>
  );
};

export default Main;
