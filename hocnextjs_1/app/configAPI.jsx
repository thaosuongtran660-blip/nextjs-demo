const { default: axios} = require("axios");

const configAPI = axios.create({
    baseURL: 'http://localhost/myproject/public/api/',

});

configAPI.interceptors.response.use(function onFulfilled(response) {
    return response.data;
}, function onRejected(error) {
    return Promise.reject(error);
});

export default configAPI;