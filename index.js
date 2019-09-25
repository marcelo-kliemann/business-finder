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

async function search(response){

  let i = 0;
  let j = 0;
  
  while (i < 5) {
    const business = response.jsonBody.businesses[i];

    console.log('-----------------------------------');
    j = i+1;
    console.log('Business ' + j);
    console.log('Name: ' + business.name);
    console.log('Street: ' + business.location.address1);
    console.log('City: ' + business.location.city);
    console.log('');
    
    await client.reviews(business.id).then(response => {
      
      const review = response.jsonBody.reviews[0];
      console.log('Review: ' + review.text);
      console.log('Autor: ' + review.user.name);

    }).catch( e=> {
      console.log(e);
    })

    console.log('');
    i++;
  }
}

client.search(searchRequest)
.then(response => search(response))
.catch(e => {
  console.log(e);
});