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

  addUserCustomer = (username, password) =>
    this.axiosInstance.post('User/add-user', {
      UserName: username,
      Password: password,
      UserRoleId: 1
    });

  addUserEmployee = (username, password) =>
    this.axiosInstance.post('User/add-user', {
      UserName: username,
      Password: password,
      UserRoleId: 2
    });

  addCustomer = (firstname, lastname, email) =>
    this.axiosInstance.post('Customer/add-customer', {
      CustomerName: firstname,
      CustomerSurname: lastname,
      CustomerEmail: email
    });

  addEmployee = (employeeName, employeeSurname, companyId) =>
    this.axiosInstance.post('Employee/add-employee', {
      EmployeeName: employeeName,
      EmployeeSurname: employeeSurname,
      CompanyId: companyId
    });

  addCompany = (companyName, companyCity, companyAdress) =>
    this.axiosInstance.post('Company/add-company', {
      CompanyName: companyName,
      CompanyCity: companyCity,
      CompanyAdress: companyAdress
    });

  addCar = (carName, carModel, rentPrice, requiredLicenseAge, seatingCapacity, airbag, companyId) =>
    this.axiosInstance.post('Car/add-car', {
      CarName: carName,
      CarModel: carModel,
      RentPrice: rentPrice,
      RequiredLicenseAge: requiredLicenseAge,
      SeatingCapacity: seatingCapacity,
      Airbag: airbag,
      CompanyId: companyId
    });

  deleteEmployee = (employeeId) =>
    this.axiosInstance.delete('Employee/delete-employee', { data: { EmployeeId: employeeId } });

  deleteCompany = (companyId) =>
    this.axiosInstance.delete('Company/delete-company', { data: { CompanyId: companyId } });

  deleteCar = (carId) => this.axiosInstance.delete('Car/delete-car', { data: { CarId: carId } });

  updateEmployee = (employeeId, employeeName, employeeSurname) =>
    this.axiosInstance.put('Employee/update-employee', {
      EmployeeId: employeeId,
      EmployeeName: employeeName,
      EmployeeSurname: employeeSurname
    });

  updateUserEmployee = (userId, username, password) =>
    this.axiosInstance.put('User/update-user', {
      UserId: userId,
      UserName: username,
      Password: password
    });

  updateCompany = (companyId, companyName, companyCity, companyAdress) =>
    this.axiosInstance.put('Company/update-company', {
      CompanyId: companyId,
      CompanyName: companyName,
      CompanyCity: companyCity,
      CompanyAdress: companyAdress
    });

  updateCar = (
    carId,
    carName,
    carModel,
    rentPrice,
    requiredLicenseAge,
    seatingCapacity,
    airbag,
    companyId
  ) =>
    this.axiosInstance.put('Car/update-car', {
      CarId: carId,
      CarName: carName,
      CarModel: carModel,
      RentPrice: rentPrice,
      RequiredLicenseAge: requiredLicenseAge,
      SeatingCapacity: seatingCapacity,
      Airbag: airbag,
      CompanyId: companyId
    });

  saveFile = (uploadedFile) =>
    this.axiosInstance.post(
      'Car/SaveFile',
      { uploadedFile },
      {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:38175/',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Access-Control-Allow-Headers': 'origin,X-Requested-With,content-type,accept',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'multipart/form-data'
        }
      }
    );

  getCustomerCount = () => this.axiosInstance.get('Customer/customer-count');

  getEmployeeCount = () => this.axiosInstance.get('Employee/employee-count');

  getCompanyCount = () => this.axiosInstance.get('Company/company-count');

  getCarCount = () => this.axiosInstance.get('Car/car-count');

  getUserList = () => this.axiosInstance.get('User/user-list');

  getCustomerList = () => this.axiosInstance.get('Customer/customer-list');

  getEmployeeList = () => this.axiosInstance.get('Employee/employee-list');

  getCompanyList = () => this.axiosInstance.get('Company/company-list');

  getCarList = (companyId) => this.axiosInstance.post('Car/car-list', { CompanyId: companyId });
}

export default new Api();
