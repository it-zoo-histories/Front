const request_post = (options) => {

    console.log("[REQUEST_POST]: ", options.url, {method: "POST", body: JSON.stringify(options.body.payload), 
    headers: {
        "Content-Type": "application/json"
    }
    })
    fetch(options.url, {method: "POST", body: JSON.stringify(options.body.payload), 
    headers: {
        "Content-Type": "application/json"
    },
    mode: 'cors'
    })
    .then( response =>{
        if (!response.ok){
            return Promise.reject("error send data")
        }
        return response
    })
    .then( res => {
        return Promise.resolve("success")
    }  
    )
}

export default request_post;