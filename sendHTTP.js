'use strict';

const https = require('https');

//Send using HTTP module
const send = (options) => {
    return new Promise((resolve, reject) => {
        try{
            const clientRequest = https.get(options, (resp) => {
                let data = '';
                resp.on('data', (d) => {
                    data += d;
                });

                resp.on('end', () => {
                    resolve({
                        statusCode: resp.statusCode,
                        headers: resp.headers,
                        body: data
                    });
                });

                resp.on('error', (e) => {
                    reject(e);
                    });
            });
                
            }catch(e){
                reject(e);
            }
        });
};

module.exports.send = send;