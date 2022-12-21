class Colors{
    constructor(baseUrl = "https://www.colr.org/json/") {
        this.baseUrl = baseUrl;
    }
    colors(count=7, size=4) {
        return fetch(`${this.baseUrl}schemes/random/${count}?scheme_size_limit=${size}`).then(response => response.json())
    }

    tagged(tag='pastel'){
        return fetch(`${this.baseUrl}tag/${tag}`).then(response => response.json())
    }
}
export {Colors}