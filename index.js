'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '<YOUR_API_KEY>';

const searchRequest = {
  term:'ice cream',
  location: 'Alpharetta, ga'
};

const client = yelp.client(apiKey);

async function searchReviews(businesses){

  let i = 0;
  let j = 0;
  
  while (i < 5) {
    const business = businesses[i];
    const review = await client.reviews(business.id).then(response => {
      return response.jsonBody.reviews[0];
    }).catch( e=> {
      console.log(e);
    });
    j = i+1;
    i++;
    
    console.log('----------------------------------------------------------------------');
    console.log('RANK:    `' + j);
    console.log('NAME:    ' + business.name);
    console.log('STREET:  ' + business.location.address1);
    console.log('CITY:    ' + business.location.city);
    console.log('REVIEW:  ' + review.text);
    console.log('AUTHOR:  ' + review.user.name);
    console.log('');
  }
}

client.search(searchRequest)
.then(response => searchReviews(response.jsonBody.businesses))
.catch(e => {
  console.log(e);
});