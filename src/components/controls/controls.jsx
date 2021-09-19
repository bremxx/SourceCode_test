import React, {useRef} from "react";
import PropTypes from "prop-types";

const Controls = ({handleSubmit, isListVisible, setIsListVisible, handleDeleteAll}) => {

  const messageRef = useRef();

  return (
    <div className="board__controls controls">
      <form
        className="controls__item"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit(messageRef.current.value);
          messageRef.current.value = ``;
        }}>
        <input className="input" ref={messageRef} defaultValue="" type="text" placeholder="Ведите название события"></input>
        <button className="btn btn-submit" type="submit">Отправить</button>
      </form>

      <button className="controls__item btn btn-read-all" type="button">Пометить все события прочитанными</button>
      <button
        className="controls__item btn btn-delete-all"
        type="button"
        onClick={() => handleDeleteAll()}
      >Удалить все события</button>
      <button
        className="controls__item btn btn-show-popup"
        type="button"
        onClick={() => setIsListVisible(!isListVisible)}
      >Скрыть/показать попап нотификаций</button>
    </div>
  );
};

Controls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleDeleteAll: PropTypes.func.isRequired,
  isListVisible: PropTypes.bool.isRequired,
  setIsListVisible: PropTypes.func.isRequired,
};

export default Controls;
