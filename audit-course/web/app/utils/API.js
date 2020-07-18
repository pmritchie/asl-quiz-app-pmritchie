const axios = require('axios');
const errorLog = require('debug')('web:error');

const api = (req, res, next) => {
  const API = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:4000',
  });

  API.interceptors.response.use(
    (response) => (response ? response.data : {}),
    (error) => {
      // TODO: handle errors from the API
      errorLog(error);
    },
  );
  req.API = API;
  next();
};

module.exports = api;