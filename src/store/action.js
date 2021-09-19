import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  POST_MSG: `main/postMessage`,
  DELETE_ALL_MSGS: `main/deleteAllMessages`
};

const postNewMessage = createAction(ActionType.POST_MSG, (message) => ({payload: message}));

const deleteAllMessages = createAction(ActionType.DELETE_ALL_MSGS);

const sendMockMessage = () => (next, _getState) => {
  const messages = _getState().messages;
  return setTimeout(() => {
    next(postNewMessage(`New Message ${messages.length + 1}`));
  }, 2000);
};

export {
  postNewMessage,
  deleteAllMessages,
  sendMockMessage
};
