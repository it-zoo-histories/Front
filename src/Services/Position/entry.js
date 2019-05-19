import request_post from "../../Store/API/request_post";
import { API_SendCurrentPosition } from "../../Store/API/constants";

class Position{
    async sendCurrentPosition(body){
        return await request_post({
            url: API_SendCurrentPosition,
            body: body.payload
        })
    }
}

export default new Position();