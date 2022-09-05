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
                        let new_cat;
                        let catArray = [];
                        let cater_string = product['Catergories'];
                        let if_prod = await strapi.query('products');
                        let catergories = cater_string.split(',');
                        let prod = await create_product(product, name, if_prod);

                        //creating products
                        if ( prod != null ){
                          //console.log('step 2: catergories')
                          //creating catergories
                          for (let i=0; i<catergories.length; i++){
                            //console.log(catergories[i])
                            let catergory  = await strapi.query('catergory');
                            new_cat = await create_cat(i,catergory, catergories[i], prod);
                            //console.log(new_cat);
                            //console.log(prod);
                          }
                        }
                    })
                })


};

async function create_product(product, name, if_prod) {

  //console.log('step 1: product');

  let prod = null;
  let product_exists = false;

  await if_prod.find()
  .then( async(result) => {
    for (let i=0; i<result.length; i++){
      if(name = result[i].product_code){
        product_exists = true;
        break;
      }
    }

    if(!product_exists){

      if (product['Supplier Code']){
        prod = await strapi.services.products.create({
              supplier_code : product['Supplier Code'],
              product_code : name,
              description : product.Description,
              retail_price: product['Retail Price'],
              trade_price: product['Trade Price'],
        })
      }
    }
  })

  return prod;
}


async function create_cat(i,catergory, catergories, prod){
  //console.log(`call ${i} for cat: ${catergories}`)
  //console.log(`creating ${catergories}`);
  let is_present = false;
  await catergory.find()
  .then( async (result) => {

    for (let j=0; j<result.length; j++){
      if (catergories == result[j].name){
        is_present = true;
        console.log(`step 4 : Cat ${result}:exists `);
        return result[j];
      }
    }

    if (!is_present){
      console.log(`step 4 : Cat ${catergories} does not exist, creating....`);
      let new_cat = await strapi.query('catergory').create({ name : `${catergories}`, products: []});
      console.log(`new_cat: ${new_cat}`);
      return new_cat;
    }
  })
  .then( res => {
    console.log(`result: ${res}`);
    add_cat(prod, res);
  })
  .catch((err) => {
    console.log(err);
    return err;
  });

}


async function add_cat(product, catergory){
  console.log('add cat called')
  await strapi.query('products').update({id : product.id}, {categories: product.catergories.push(catergory)})
  .then(result => {
    console.log(`adding cat : ${result.id}`)
  })
  .catch( err => console.log(err));
}
