
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

function randomChuckWithCategory(category) {
}

function search(query) {
}

const ChuckAPI =
{
  categories,
  randomChuckWithCategory,
  search
}

export default ChuckAPI;
