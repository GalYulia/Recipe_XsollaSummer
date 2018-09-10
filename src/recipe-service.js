const baseUrl = 'https://json-server-recipes.herokuapp.com/';

const getUrl = (path) => {
  /*let queryString = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  queryString = queryString ? `?${queryString}` : '';*/


  console.log('url 1', baseUrl + path)
  return baseUrl + path;
};

const request = ({ path = '', init = {} }) => {
    fetch(getUrl(path), init)
        .then(response => response.json());
}

export const getRecipeById = id => request({ path: `data/${id}` });

export const getRecipes = () => request({
  path: 'data/',
});

export const getIngredientsDetails = id => request({ path: `ingredients/${id}` });

export const updateRecipe = recipe => request({
  path: `data/${recipe.id}/`,
  init: {
    method: 'PUT',
    body: JSON.stringify(recipe),
    headers: { 'Content-Type': 'application/json' },
  },
});

export const postRecipe = recipe => request({
  path: 'data/',
  init: {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: { 'Content-Type': 'application/json' },
  },
});

export const deleteRecipe = id => request({
  path: `data/${id}`,
  init: {
    method: 'DELETE',
  },
});
