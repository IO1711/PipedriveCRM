export default class FetchWrapper{
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    get(endpoint){
        return fetch(this.baseURL + endpoint)
        .then(response => {
            console.log(response);
            return response.json()});
    }

    post(endpoint, body){
        return this.#send("POST", endpoint, body);
    }

    put(endpoint, body){
        return this.#send("PUT", endpoint, body);
    }

    #send(method, endpoint, body){
        console.log(body);
        return fetch(this.baseURL+endpoint, {
            method,
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json());
    }
}