const request_post = (options) => {
    fetch(options.url, {method: "POST", body: options.body})
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