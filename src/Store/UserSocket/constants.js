import { API_BASE_URL } from "../API/constants";

const prefix = "SOCKET_STATE_";

export const API_SOCKET_URL =  "ws://192.168.46.85:8888/chat";

export const ADD_NEW_CONNECTION = prefix + "ADD_NEW_CONNECTION";
export const SEND_NEW_POSITION = prefix + "SEND_NEW_POSITION";