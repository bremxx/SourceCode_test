import {createReducer} from "@reduxjs/toolkit";
import {DEFAULT_VISIBLE_MESSAGES_NUM} from "../const";
import {changeMessageSeenStatus, deleteAllMessages, markAllMessagesSeen, postNewMessage} from "./action";

const initialState = {
  messages: [
    {
      id: 1,
      text: `Initial message`,
      seen: false
    }
  ],
  visibleMessagesNum: DEFAULT_VISIBLE_MESSAGES_NUM,
  unseenMessagesNum: 1
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(postNewMessage, (state, action) => {
    state.messages.unshift(action.payload);
    if (!action.payload.seen) {
      state.unseenMessagesNum++;
    }
  })
  .addCase(deleteAllMessages, (state) => {
    state.messages = [];
    state.unseenMessagesNum = 0;
  })
  .addCase(changeMessageSeenStatus, (state, action) => {
    state.unseenMessagesNum--;
    state.messages.find((it) => it.id === action.payload.id).seen = action.payload.status;
  })
  .addCase(markAllMessagesSeen, (state) => {
    state.messages.forEach((it) => {
      it.seen = true;
    });
    state.unseenMessagesNum = 0;
  });
});

export default reducer;
