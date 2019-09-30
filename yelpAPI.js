'use strict';

const querystring = require('querystring');
const _url = require('url');
const axios = require('axios');

class YelpClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async search(parameters) {

        const queryParameters = querystring.stringify(parameters);
        const searchURL = 'https://api.yelp.com/v3/businesses/search?'.concat(queryParameters);
        let res;

        const config = {
            method: 'get',
            url: searchURL,
            headers: { 'Authorization': 'Bearer '.concat(this.apiKey) }
        }
        res = await axios(config);
        res = res.data.businesses;

        return res;
    }

    async getReviews(businessId) {

        const searchURL = 'https://api.yelp.com/v3/businesses/{id}/reviews'.replace('{id}', businessId);
        let res;

        const config = {
            method: 'get',
            url: searchURL,
            headers: { 'Authorization': 'Bearer '.concat(this.apiKey) }
        }
        res = await axios(config);
        res = res.data;

        return res;
    }
}

const createYelpClient = (apiKey) => {
    return new YelpClient(apiKey);
  };

module.exports = {
    client: createYelpClient
}