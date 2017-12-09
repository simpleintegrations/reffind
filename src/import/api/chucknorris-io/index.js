
import axios from 'axios';

const baseChuckURL = 'https://api.chucknorris.io/jokes';

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

async function randomChuckWithCategory(category) {
  if (category === undefined || category === null || category === '') {
    throw 'Must supply a "category"';
  } 
  const url = `${baseChuckURL}/random?category=${category}`;
  const result = {
    fact: null,
    error: null,
  };

  await axios.get(url)
    .then(response => {
      result.fact = [response.data];
    })
    .catch(error => {
      result.error = error.toString();
    });

  return result;
}

async function search(query) {
  if (query === undefined || query === null || query === '') {
    throw 'Must supply a "query"';
  } 
  const url = `${baseChuckURL}/search?query=${query}`;
  const result = {
    facts: null,
    error: null,
  };

  await axios.get(url)
    .then(response => {
      result.facts = response.data.result;
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
