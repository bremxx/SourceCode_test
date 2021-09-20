import React, {memo, useRef} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {markAllMessagesSeen} from "../../store/action";

const Controls = ({handleSubmit, handleDeleteAll, handlePopupToggleClick}) => {

  const messageRef = useRef();
  const dispatch = useDispatch();

  const handleReadAllClick = () => dispatch(markAllMessagesSeen());

  return (
    <div className="board__controls controls">
      <form
        className="controls__item"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit(messageRef.current.value);
          messageRef.current.value = ``;
        }}>
        <input
          className="input"
          ref={messageRef}
          defaultValue=""
          type="text"
          placeholder="Ведите название события"
          required></input>
        <button className="btn btn-submit" type="submit">Отправить</button>
      </form>

      <button
        className="controls__item btn btn-read-all"
        type="button"
        onClick={() => handleReadAllClick()}
      >Пометить все события прочитанными</button>

      <button
        className="controls__item btn btn-delete-all"
        type="button"
        onClick={() => handleDeleteAll()}
      >Удалить все события</button>

      <button
        className="controls__item btn btn-show-popup"
        type="button"
        onClick={() => handlePopupToggleClick()}
      >Скрыть/показать попап нотификаций</button>
    </div>
  );
};

Controls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDeleteAll: PropTypes.func.isRequired,
  handlePopupToggleClick: PropTypes.func.isRequired,
};

export default memo(Controls);
