import {createReducer} from "@reduxjs/toolkit";
import {deleteAllMessages, postNewMessage} from "./action";

const initialState = {
  messages: [],
  visibleMessagesNum: 5
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(postNewMessage, (state, action) => {
    state.messages.unshift(action.payload);
  })
  .addCase(deleteAllMessages, (state) => {
    state.messages = initialState.messages;
  });
});

export default reducer;
