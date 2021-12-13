import { CREATE_MESSAGE } from "./types";

// Create a new message

export const createMessage = (msg) => {
    return {
        type: CREATE_MESSAGE,
        payload: msg,
    };
}

// Action to return ERRORS

export const returnErrors = (msg, status) => {
    return {
        type: "GET_ERRORS",
        payload: { msg, status },
    };
}