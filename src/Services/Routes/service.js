import { APIRoutes, APIRoutesGetRouteByID, APIRoutesGetLast } from "../../Store/API/routes";
import request_get from "../../Store/API/request_get";

class RoutesService {
    async GetLastRoutes(id){
        return await request_get({
           url: APIRoutesGetRouteByID+id,
           method: "GET"
        })
    }

    async GetRoutes(limit){
        return await request_get({
            url: APIRoutesGetLast+"?limit="+limit,
            method: "GET"
        })
    }
}

export default new RoutesService();