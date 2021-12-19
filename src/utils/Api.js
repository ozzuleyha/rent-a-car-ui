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

  register = (username, firstName, lastName, Email, password, drivingLicenseDate, Birthday) =>
    this.axiosInstance.post('auth/register', {
      UserName: username,
      CustomerName: firstName,
      CustomerSurname: lastName,
      CustomerEmail: Email,
      Password: password,
      DrivingLicenseDate: drivingLicenseDate,
      BirthDay: Birthday
    });
}

export default new Api();
