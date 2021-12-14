/* eslint-disable camelcase */
import axios from 'axios';

class Api {
  axiosInstance;

  constructor() {
    const baseURL = 'http://localhost:38175/api/';
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 90000
    });
  }

  login = (username, password) =>
    this.axiosInstance.post('User/login', { UserName: username, Password: password });

  signUp = (userData) => this.axiosInstance.post('auth/register', userData);
}

export default new Api();
