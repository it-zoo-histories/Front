import * as types from './constants'
import HistoryService from '../../Services/Routes/HistoryService'


export function fetchedHistory(userId) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch fetchedHistory");

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