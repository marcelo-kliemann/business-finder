'use strict';

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '<YOUR_API_KEY>';

//OPTION 1: 
//Using Yelp Fusion Client library. 
//Uncomment to use.

// const searchBusinessesWithYelpClient = require('./searchBusinessesWithYelpClient.js');

// const finder = searchBusinessesWithYelpClient.finder(apiKey);
// finder.getTopFiveIceCreamInAlpharreta();



//OPTION 2: 
//Using custom Yelp Client and HTTP library

const searchBusinesses = require('./searchBusinesses.js');

const finder = searchBusinesses.finder(apiKey);
finder.getTopFiveIceCreamInAlpharreta();

