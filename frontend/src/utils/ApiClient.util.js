class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        const data = await this.#send(endpoint, 'GET');
        return data;
    }

    async #send(endpoint, method, body = null) {

        const options = {
            method: method,
            headers: {}
        };

        if(body) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        }

        try {
            console.log(`
                baseUrl = ${this.baseUrl}
                endpoint = ${endpoint}
                `);
            const response = await fetch(`${this.baseUrl}${endpoint}`,options);

            if(!response.ok) {
                throw new Error('Fetch error');
            }

            const data = await response.json();

            return data;
        } catch(error) {
            console.error('Error occured: ', error);
        }
    }
}

export default ApiClient;