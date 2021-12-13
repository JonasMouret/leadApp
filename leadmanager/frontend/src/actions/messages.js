import { CREATE_MESSAGE } from "./types";

// Create a new message

export const createMessage = (msg) => {
    return {
        type: CREATE_MESSAGE,
        payload: msg,
    };
}
