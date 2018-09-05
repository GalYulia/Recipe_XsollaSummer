const baseUrl = 'http://localhost:3000/'

const getUrl =({path = '', params = {}}) => {
    let queryString = Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
    queryString = queryString ? '?' + queryString : '';
    console.log('baseUrl url',baseUrl + path + queryString)

    return baseUrl + path + queryString;
}

const request = ({path = '', params = {}, init = {}})=> {
    //console.log('path url',getUrl({path: path, params: params}))

    return fetch(getUrl({path: path, params: params}), init)
        .then(response => response.json());
    // promise.then навешивает обработчики на успешный результат или ошибку
}

export const getRecipeById = (id) => {
    return request({path: 'data/' + id});
}

export const getRecipes = () => {
    return request({
        path: 'data/'
    });
};

export const getIngredientsDetails = (id) => {
    return request({path: 'ingredients/' + id});
};

export const updateRecipe = (recipe) => {

    return request({path: 'data/' + recipe.id + '/', params:{},
        init: {
        method: 'PUT',
        body: JSON.stringify(recipe),
        headers: {"Content-Type": "application/json"}
        }});
};

