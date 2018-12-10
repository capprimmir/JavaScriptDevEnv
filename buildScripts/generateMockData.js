/* This scripts generates mock data for local development.
this way don't need to point to an actual API,
but can enjoy realistic, randomized data
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSquema';
import faker from 'faker';
import fs from 'fs';
import chalk from 'chalk';

// fix from GitHub
jsf.extend("faker", function() {
  return faker;
})

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err){
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green("Mock data generated"));
  }
});
