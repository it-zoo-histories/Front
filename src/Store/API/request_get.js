const request_get = (opt) => {
    return fetch(opt.url)
    .then(response =>
        response.json().then(json => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );   
}

export default request_get;