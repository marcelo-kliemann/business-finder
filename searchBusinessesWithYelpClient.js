'use strict';

const yelp = require('yelp-fusion');

class SearchBusinessesWithYelpAPIClient {

  constructor(apiKey) {
    this.apiKey = apiKey;
    this.client = yelp.client(apiKey);
  }


  async searchReviews(businesses) {

    let i = 0;
    let j = 0;

    while (i < 5) {
      const business = businesses[i];
      const review = await this.client.reviews(business.id).then(response => {
        return response.jsonBody.reviews[0];
      }).catch(e => {
        console.log(e);
      });
      j = i + 1;
      i++;

      console.log('----------------------------------------------------------------------');
      console.log('RANK:    ' + j);
      console.log('NAME:    ' + business.name);
      console.log('STREET:  ' + business.location.address1);
      console.log('CITY:    ' + business.location.city);
      console.log('REVIEW:  ' + review.text);
      console.log('AUTHOR:  ' + review.user.name);
      console.log('');
    }
  }

  getTopFiveIceCreamInAlpharreta() {

    const searchRequest = {
      term: 'ice cream',
      location: 'Alpharetta, ga'
    };

    this.client.search(searchRequest)
      .then(response => this.searchReviews(response.jsonBody.businesses))
      .catch(e => {
        console.log(e);
      });
  }
}

const createSearchBusinessesWithYelpAPIClient = (apiKey) => {
  return new SearchBusinessesWithYelpAPIClient(apiKey);
};

module.exports = {
  finder: createSearchBusinessesWithYelpAPIClient
}