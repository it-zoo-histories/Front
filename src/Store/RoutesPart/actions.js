import RoutesService from "../../Services/Routes/service";
import { GET_ROUTES_FROM_BACKEND } from "./constants";

export function GetRoutesFromBackend(){
    return async (dispatch, getState) => {
        
        const fetchedRoutes = RoutesService.GetLastRoutes("hackaton");
        dispatch(setupFetchedDatas(fetchedRoutes))
    }
}

function setupFetchedDatas (data) {
    return {
        type: GET_ROUTES_FROM_BACKEND,
        payload: data
    }
}