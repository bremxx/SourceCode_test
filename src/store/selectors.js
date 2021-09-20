import {createSelector} from "reselect";

const getMessagesSelector = createSelector(
    (state) => state.messages,
    (messages) => messages
);

const getUnseenMessagesNumSelector = createSelector(
    (state) => state.unseenMessagesNum,
    (unseenMessagesNum) => unseenMessagesNum
);

const makeGetMessagesSelector = () => getMessagesSelector;
const makeGetUnseenMessagesNumSelector = () => getUnseenMessagesNumSelector;

export {makeGetMessagesSelector, makeGetUnseenMessagesNumSelector};
