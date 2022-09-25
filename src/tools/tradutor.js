const request = require('request');
const uuidv4 = require('uuid/v4');

let chave_translator = 'TRANSLATOR_TEXT_SUBSCRIPTION_KEY';

if (!process.env[chave_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + chave_translator);
}
let subscriptionKey = process.env[chave_translator];
let endpoint_translator = 'TRANSLATOR_TEXT_ENDPOINT';
if (!process.env[endpoint_translator]) {
  throw new Error('Por favor, configure a sua variável de ambiente: ' + endpoint_translator);
}
let endpoint = process.env[endpoint_translator];
