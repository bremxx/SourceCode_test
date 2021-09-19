import {createReducer} from "@reduxjs/toolkit";
import {deleteAllMessages, postNewMessage} from "./action";

const initialState = {
  messages: []
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(postNewMessage, (state, action) => {
    state.messages.push(action.payload);
  })
  .addCase(deleteAllMessages, (state) => {
    state.messages = initialState.messages;
  });
});

export default reducer;
