import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  POST_MSG: `main/postMessage`,
  DELETE_ALL_MSGS: `main/deleteAllMessages`,
  MSG_IS_SEEN: `main/messageHasBeenSeen`,
  ALL_MSGS_ARE_SEEN: `main/allMessagesHaveBeenSeen`,
};

const postNewMessage = createAction(ActionType.POST_MSG, (message) => ({payload: message}));

const deleteAllMessages = createAction(ActionType.DELETE_ALL_MSGS);

const changeMessageSeenStatus = createAction(ActionType.MSG_IS_SEEN, (id, status) => ({payload: {id, status}}));

const markAllMessagesSeen = createAction(ActionType.ALL_MSGS_ARE_SEEN);

export {
  postNewMessage,
  deleteAllMessages,
  changeMessageSeenStatus,
  markAllMessagesSeen
};
