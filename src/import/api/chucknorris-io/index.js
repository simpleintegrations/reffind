
import axios from 'axios';

const baseChuckURL = 'https://api.chucknorris.io/jokes';

/*
General architecture of this API:
  * uses a standard return value that contains an 'error' and some kind of result
  * the name of result is dependent on what the function should be returning
  * all functions are as 'async' to make calling code cleaner and abstract the API

The API is returned as a bundle of function calls.
If your import looks like this:

import chuckAPI from '/src/import/api/chucknorris-io';

Then you call the functions like this:

  chuckApi.categories().then( result => { 
    // do what you need here 
  }).catch(err => {
    // handle the error here
  });

*/

/*
  categories should be an array of category strings
*/
async function categories() {
  const url = `${baseChuckURL}/categories`;
  const result = {
    categories: null,
    error: null,
  };

  return await axios.get(url)
    .then(response => {
      result.categories = response.data;
      return result;
    })
    .catch(error => {
      result.error = error.toString();
      return result;
    });

}

/*
  randomChuckWithCategory requires a "category" to be passed
  facts should contain an array of Chuck Norris fact objects
  [only one fact is returned but it is kept as an array to match the search function]
*/
async function randomChuckWithCategory(category) {
  if (category === undefined || category === null || category === '') {
    throw new Error('Must supply a "category"');
  } 
  const url = `${baseChuckURL}/random?category=${category}`;
  const result = {
    facts: null,
    error: null,
  };

  await axios.get(url)
    .then(response => {
      result.facts = [response.data];
    })
    .catch(error => {
      result.error = error.toString();
    });

  return result;
}

/*
  search requires a "query" string to be passed
  facts should contain an array of Chuck Norris fact objects
  [0, 1 or more could be returned]
*/
async function search(query) {
  if (query === undefined || query === null || query === '') {
    throw new Error('Must supply a "query"');
  } 
  const url = `${baseChuckURL}/search?query=${query}`;
  const result = {
    facts: null,
    error: null,
  };

  await axios.get(url)
    .then(response => {
      result.facts = response.data.result ? response.data.result : [];
    })
    .catch(error => {
      result.error = error.toString();
    });

  return result;
}

const ChuckAPI =
{
  categories,
  randomChuckWithCategory,
  search
}

export default ChuckAPI;
