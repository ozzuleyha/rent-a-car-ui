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

  addUser = (username, password) =>
    this.axiosInstance.post('User/add-user', {
      UserName: username,
      Password: password,
      UserRoleId: 1
    });

  addCustomer = (firstname, lastname, email) =>
    this.axiosInstance.post('Customer/add-customer', {
      CustomerName: firstname,
      CustomerSurname: lastname,
      CustomerEmail: email
    });

  getCustomerCount = () => this.axiosInstance.get('Customer');

  getEmployeeCount = () => this.axiosInstance.get('Employee');

  getCompanyCount = () => this.axiosInstance.get('Company');

  getCarCount = () => this.axiosInstance.get('Car');
}

export default new Api();
