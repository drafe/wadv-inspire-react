class Inspire{
    constructor(baseUrl = "https://type.fit/api/quotes") {
        this.baseUrl = baseUrl;
    }

    quotes(){
        return fetch(this.baseUrl).then(response => response.json())
    }
}

export {Inspire}