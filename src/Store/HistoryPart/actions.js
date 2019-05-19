import * as types from './constants'
import HistoryService from '../../Services/Routes/HistoryService'
import AuthService from '../../Services/Routes/AuthService';
import {GET_CURRENT_USER} from '../Auth/constants';


export function GetHistoryCurrentUser() {
    return dispatch => {
        try {
            let resp = AuthService.getCurrentUser();

            resp.then(resp => {
                console.log("Start to dispatch history, get curretnUser")
                dispatch({
                    type: GET_CURRENT_USER,
                    payload: resp
                })
                console.log("Load currentUser");
                dispatch(fetchedHistory(resp.id))
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export function fetchedHistory(userId) {
    return async (dispatch, getState) => {
        try {
            // console.log("Dispatch fetchedHistory");

            const fetchedHistory = HistoryService.getHistory(userId);

            let response = await fetchedHistory;

            dispatch({type: types.FETCHED_HISTORY, payload: response})
            // const fetchHistory =
        } catch (error) {
            console.error(error);
        }
    }
}

export function addHistory(history) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch add history");

            const fetchedAddHistory = HistoryService.postHistory(history);

            let response = await fetchedAddHistory;

            dispatch({type: types.ADD_HISTORY, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}