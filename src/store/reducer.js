import {createReducer} from "@reduxjs/toolkit";
import {postNewMessage} from "./action";

const initialState = {
  messages: [
    `New 1`,
    `New 2`,
    `New 3`
  ]
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(postNewMessage, (state, action) => {
    state.messages.push(action.payload);
  });
});

export default reducer;
