import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  POST_MSG: `main/postMessage`,
  DELETE_ALL_MSGS: `main/deleteAllMessages`
};

const postNewMessage = createAction(ActionType.POST_MSG, (message) => ({payload: message}));

const deleteAllMessages = createAction(ActionType.DELETE_ALL_MSGS);


export {
  postNewMessage,
  deleteAllMessages,
};
