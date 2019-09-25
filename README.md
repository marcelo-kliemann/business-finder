# Top 5 ice scream shops in Alpharetta finder.
This is a simple client to perform a search on the Yelp Fusion API by the top 5 ice scream shops in Alpharetta.

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

Sign up and create an App on the [Yelp Fusion Portal] (https://www.yelp.com/fusion).

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

It will print the top 5 ice scream shops in Alpharetta like the example below:
```

Business 1
Name: Four Fat Cows
Street: 64 N Main St
City: Alpharetta

Review: Customer service goes above and beyond! A slight miscommunication was fixed quickly with better customer service than was expected! 

The ice cream is...
Autor: Brittany W.
