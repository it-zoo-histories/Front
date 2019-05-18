import {API_BASE_URL} from "../../Store/API/constants";
import request from "../../Store/API/requests";


class HistoryService {

    async getHistory() {
        return await request({
            url: API_BASE_URL + "/history",
            method: "GET"
        })
    }

    async postHistory(history) {
        console.log("Pushed history");
        return await request({
            url: API_BASE_URL + "/history",
            method: "POST"
        })
    }
}