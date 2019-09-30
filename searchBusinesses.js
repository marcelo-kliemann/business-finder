'use strict';

const yelpAPI = require('./yelpAPI.js');
const print = require('./util/print.js');

/**
 * Class that will call the API for the businesses, 
 * will keep only 5 of them and will call the API for their reviews.
 */
class SearchBusinesses {
  
  constructor(apiKey){
    this.apiKey = apiKey;
    this.yelp = yelpAPI.client(apiKey);
  }

  
  async getReviews(businessId) {

    return await this.yelp.getReviews(businessId);
  };


  async getTopFiveIceCreamInAlpharreta(apiKey) {

    const queryParameters = {
      term: 'ice cream',
      location: 'Alpharetta, GA'
    };

    let businesses;

    await this.yelp.search(queryParameters)
      .then(response => {
        businesses = response;
        console.log('');
        console.log('Total businesses retrieved: '.concat(businesses.length));
      })
      .catch(e => {
        console.log(e);
      });

    //Filter only the first 5 elements:
    businesses = businesses.filter((elem, i, array) => {
      return array.indexOf(elem) < 5;
    });

    for (let i = 0; i < 5; i++) {
      let reviews = await this.getReviews(businesses[i].id);
      businesses[i].reviews = reviews;
    }

    //using map needs some tricks that I have to find out...
    // businesses = businesses.map((elem, i, array) => {
    //   let reviews = await getReviews(elem.businessId);
    //   elem.reviews = reviews;
    //   return elem;
    // })

    print.printBusinesses(businesses);
  }
}

const createSearchBusinesses = (apiKey) => {
  return new SearchBusinesses(apiKey);
};

module.exports = {
  finder: createSearchBusinesses
}