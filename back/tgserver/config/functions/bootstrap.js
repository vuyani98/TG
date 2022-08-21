'use strict';

const { createSecureServer } = require('http2');
const { default: createStrapi } = require('strapi');

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {

  const CSVTOJSON = require('csvtojson');
  const fs = require ('fs');


    CSVTOJSON().fromFile('./data/Surveillance.csv')
                .then( (table) => {
                    let surv = fs.readFileSync('./data/Surveillance.csv', 'utf-8');

                    table.forEach(product => {

                        let name = product['Product Code'];


                        if (product['Supplier Code']){
                          strapi.services.products.create({
                                supplier_code : product['Supplier Code'],
                                product_code : name,
                                description : product.Description,
                                retail_price: product['Retail Price'],
                                trade_price: product['Trade Price'],
                          })
                        }

                    })
                })


};


