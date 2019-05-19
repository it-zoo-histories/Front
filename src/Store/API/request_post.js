import Axios from 'axios';
// import { request } from 'https';

// export function requestPost() {
//     return request({
//         url: 'http://192.168.46.85:8888/points?lon=54.342&id=hackaton&lat=56.34',
//         method: 'POST'
//     })
// }

const request_post = (options) => {
    return Axios.post(options.url /*+ "?id=" + options.body.id+"&lat=" + options.body.lat + "&lon=" + options.body.lon*/, JSON.stringify(options.body), {headers: {
            "Content-Type": "application/json"
        }})
        .then(resp => {return Promise.resolve(resp.data.status)})
        .catch(err => {return Promise.reject("error: ", err)})
    // fetch(`${options.url}?id=""`, {method: "POST"})
    // .then(resp => resp.json())
    // .then(resp => console.log("[FETCHED]: ", resp))
    // .catch(err => console.log("[ERROR]: ", err))
    // console.log("Start request points")
    // console.log("[REQUEST_POST]: ", options.url, {method: "POST", body: JSON.stringify(options.body.payload), 
    // headers: {
    //     "Content-Type": "application/json"
    // }
    // })
    // fetch(options.url, {method: "POST", body: `{"id": "hackaton", "lat": 54.342, "lon": 55.34}`, 
    // headers: {
    //     "Content-Type": "application/json"
    // },
    // })
    // .then( response =>{
    //     if (!response.ok){
    //         return Promise.reject("error send data")
    //     }
    //     return response
    // })
    // .then( res => {
    //     return Promise.resolve("success")
    // }  
    // )
    
}

export default request_post;