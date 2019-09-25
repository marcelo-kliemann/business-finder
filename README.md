# Top 5 ice scream shops in Alpharetta finder.
This is a simple client to perform a search for the top 5 ice scream shops in Alpharetta on the Yelp Fusion API.

This solution is using [Yelp Fusion API client for Node.js](https://github.com/tonybadguy/yelp-fusion) to call Yelp endpoints. 
When creating an instance of the Yelp Fusion API client, it delivers functions that perform REST requests to the APIs endpoints using Promises.
The REST requests are done using the Node.js module [@tonybadguy/call-me-maybe](https://www.npmjs.com/package/@tonybadguy/call-me-maybe).


## Setup

Clone the repo:

```
$ git clone https://github.com/marcelo-kliemann/business-finder.git
```

Go into the directory:

```
$ cd business-finder
```

Install the dependences:

```
$ npm install 
```

Sign up and create an App on the [Yelp Fusion Portal](https://www.yelp.com/fusion).

Open up the `index.js` file of this project and put your API Key from the [manage app page](https://www.yelp.com/developers/v3/manage_app)

```javascript
// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = '<YOUR_API_KEY>';
```

## Usage

Once you're all setup, you should be able to run the script directly from the command line:

```
$ node index.js
```

It will print in the log the top 5 ice scream shops in Alpharetta like the example below:
```

RANK:    1
NAME:    Scream'n Nuts
STREET:  5950 North Point Pkwy
CITY:    Alpharetta
REVIEW:  Step aside diabetes, I am trying this doughnut. The Nutella doughnut is amazing!!! It is jumbo-sized and can definitely be shared among a few.. 

There are...
AUTHOR:  Sunita M.
