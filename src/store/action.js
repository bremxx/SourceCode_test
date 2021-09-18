import {createAction} from "@reduxjs/toolkit";

const ActionType = {
  POST_MSG: `main/postMessage`
};

const postNewMessage = createAction(ActionType.POST_MSG, (meesage) => ({payload: meesage}));

export {postNewMessage};
