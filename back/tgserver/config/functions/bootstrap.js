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

module.exports = async () => {

  const CSVTOJSON = require('csvtojson');
  const fs = require ('fs');


    CSVTOJSON().fromFile('./data/Surveillance.csv')
                .then( async (table) => {
                    let surv = fs.readFileSync('./data/Surveillance.csv', 'utf-8');

                    table.forEach( async (product) => {

                        let name = product['Product Code'];
                        let prod, new_cat;

                        if (product['Supplier Code']){
                          prod = await strapi.services.products.create({
                                supplier_code : product['Supplier Code'],
                                product_code : name,
                                description : product.Description,
                                retail_price: product['Retail Price'],
                                trade_price: product['Trade Price'],
                          })
                        }

                        //Searching and Updating Catergories
                        let cater_string = product['Catergories'];
                        let catergories = cater_string.split(',');

                        //console.log(catergories);
                        for (let i=0; i<catergories.length; i++){
                          //console.log(catergories[i])
                          let catergory  = strapi.query('catergory');
                          new_cat = await create_cat(i,catergory, catergories[i], prod);
                          console.log(new_cat);
                          prod['catergories'].push(new_cat);
                        }


                    })
                })


};


async function create_cat(i,catergory, catergories, prod){
  //console.log(`call ${i} for cat: ${catergories}`)
  let is_new = false;
  let new_cat;
  await catergory.find()
  .then( async (result) => {

    //console.log(`checking if catergory: ${catergories} exists`)
    let is_present = false;

    for (let j=0; j<result.length; j++){

      console.log(`Catergory: ${result[j].products}`);

      //console.log(`checking if ${result[j].name} is equal to ${catergories}`)
      if (catergories == result[j].name){
        is_present = true;
        //console.log(is_present);
        //console.log('catergory exists')
        return result[j]
      }

    }

    if (is_present == false){
      //console.log(`${catergories} does not exist`)
      new_cat = await strapi.query('catergory').create({ name : `${catergories}`, products: []});
      //console.log(`new_cat: ${new_cat.name}`);
      return new_cat
      //console.log(`Created catergory : ${catergories}`);
    }

  })
  .catch((err) => {
    console.log(err);
  });

  return new_cat;

}
