import request from "../../Store/API/requests";
import {API_HISTORY_ROUTE} from "../../Store/API/routes";


class HistoryService {


    async getHistory(userId) {
        return await request({
            url: API_HISTORY_ROUTE + `?user_id=${userId}`,
            method: "GET"
        })
    }

    async postHistory(history) {
        console.log("Pushed history");
        return await request({
            url: API_HISTORY_ROUTE,
            method: "POST",
            body: JSON.stringify(history)
        })
    }
}

export default new HistoryService()