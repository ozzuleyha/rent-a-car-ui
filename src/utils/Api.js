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

  getCustomerCount = () => this.axiosInstance.get('Customer/customer-count');

  getEmployeeCount = () => this.axiosInstance.get('Employee/employee-count');

  getCompanyCount = () => this.axiosInstance.get('Company/company-count');

  getCarCount = () => this.axiosInstance.get('Car/car-count');

  getCustomerList = () => this.axiosInstance.get('Customer/customer-list');

  getEmployeeList = () => this.axiosInstance.get('Employee/employee-list');

  getCompanyList = () => this.axiosInstance.get('Company/company-list');

  getCarList = () => this.axiosInstance.get('Car/Car-list');
}

export default new Api();
