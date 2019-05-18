import RoutesService from "../../Services/Routes/RoutesService";
import { GET_ROUTE_FROM_BACKEND } from "./constants";

export function GetRoutesFromBackend(){
    return async (dispatch, getState) => {
        
        const fetchedRoutes = RoutesService.GetLastRoutes("hackaton");
        fetchedRoutes.then(resSuccess => 
        dispatch(setupFetchedDatas(resSuccess))
            )    }
}

function setupFetchedDatas (data) {
    return {
        type: GET_ROUTE_FROM_BACKEND,
        payload: data
    }
}