'use strict';

const printBusinesses = (businesses) => {
    businesses.forEach(business => {
      console.log('----------------------------------------------------------------------');
      console.log('RANK:    ' + (businesses.indexOf(business) + 1));
      console.log('NAME:    ' + business.name);
      console.log('STREET:  ' + business.location.address1);
      console.log('CITY:    ' + business.location.city);
      console.log('REVIEW:  ' + business.reviews.reviews[0].text);
      console.log('AUTHOR:  ' + business.reviews.reviews[0].user.name);
      console.log('');
    });
  };

  module.exports.printBusinesses = printBusinesses;