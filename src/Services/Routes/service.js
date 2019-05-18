import request from "../../Store/API/requests";
import { APIRoutes, APIRoutesGetRouteByID, APIRoutesGetLast } from "../../Store/API/routes";

class RoutesService {
    async GetLastRoutes(id){
        return await request({
           url: APIRoutesGetRouteByID+id,
           method: "GET"
        })
    }

    async GetRoutes(limit){
        return await request({
            url: APIRoutesGetLast+"?limit="+limit,
            method: "GET"
        })
    }
}

export default RoutesService;