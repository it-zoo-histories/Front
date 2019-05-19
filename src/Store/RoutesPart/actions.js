import RoutesService from "../../Services/Routes/RoutesService";
import {GET_ROUTE_FROM_BACKEND} from "./constants";

export function GetRoutesFromBackend(route) {
    return async (dispatch, getState) => {

        const fetchedRoutes = RoutesService.GetLastRoutes(route);
        fetchedRoutes.then(resSuccess =>
            dispatch(setupFetchedDatas(route, resSuccess))
        )
    }
}


function setupFetchedDatas(route, data) {
    console.log("Fetched data routes", data)
    return {
        type: GET_ROUTE_FROM_BACKEND,
        payload: {route: route, data: data}
    }
}