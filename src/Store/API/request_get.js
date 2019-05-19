const request_get = (opt) => {
    return fetch(opt.url, {
        method: "GET"
    })
    .then(response =>
        response.json().then(json => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return Promise.resolve(json);
        })
    );   
}

export default request_get;