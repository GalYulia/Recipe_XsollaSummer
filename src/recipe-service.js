const baseUrl = 'http://localhost:3000/'

const getUrl =({path = '', params = {}}) => {
    let queryString = Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
    queryString = queryString ? '?' + queryString : '';


    return baseUrl + path + queryString;
}

const request = ({path = '', params = {}, init = {}})=> {
    return fetch(getUrl({path: path, params: params}), init)
        .then(response => response.json());
    // promise.then навешивает обработчики на успешный результат или ошибку
}

export const getRecipeById = (id) => {
    return request({path: '/' + id});
}

export const getRecipes = () => {
    return request({
        path: 'data/'
    });
};
