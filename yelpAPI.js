'use strict';

const sendHTTP = require('./sendHTTP.js');
const querystring = require('querystring');
const _url = require('url');


class YelpClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    search(parameters) {

        const queryParameters = querystring.stringify(parameters);
        const searchURL = 'https://api.yelp.com/v3/businesses/search?'.concat(queryParameters);
        let options = _url.parse(searchURL);
        options.headers = { 'Authorization': 'Bearer '.concat(this.apiKey) };
        return sendHTTP.send(options);
    }

    getReviews(businessId) {

        const searchURL = 'https://api.yelp.com/v3/businesses/{id}/reviews'.replace('{id}', businessId);
        let options = _url.parse(searchURL);
        options.headers = { 'Authorization': 'Bearer '.concat(this.apiKey) };
        return sendHTTP.send(options);
    }
}

const createYelpClient = (apiKey) => {
    return new YelpClient(apiKey);
  };

module.exports = {
    client: createYelpClient
}