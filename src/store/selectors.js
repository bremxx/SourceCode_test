import {createSelector} from "reselect";

const getMessagesSelector = createSelector(
    (state) => state.messages,
    (messages) => messages
);

const makeGetMessagesSelector = () => getMessagesSelector;

export {makeGetMessagesSelector};
