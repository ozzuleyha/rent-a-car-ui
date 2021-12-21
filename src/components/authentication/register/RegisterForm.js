/* eslint-disable prefer-template */
import * as React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Api from '../../../utils/Api';
// import DatePicker from '@mui/lab/DatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import { now } from 'lodash';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [lastname, setLastname] = useState();
  const [firstname, setFirstname] = useState();
  const [email, setEmail] = useState();
  // const [birthday, setBirthday] = useState(new Date('2021-12-08'));
  // const [drivinglicensedate, setDrivinglicensedate] = useState(new Date('2021-12-08'));

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = () => {
    console.log(username, password, firstname, lastname, email);
    Api.addUser(username, password).then((response) => {
      const userInformation = { UserRoleId: 1, CustomerName: firstname, CustomerSurname: lastname };
      console.log(response.data);
      Api.addCustomer(firstname, lastname, email);
      navigate('/dashboard/user/cars', { replace: true });
      localStorage.setItem('userInformations', JSON.stringify(userInformation));
    });
  };
  return (
    <Stack>
      <Stack spacing={3} sx={{ my: 2 }}>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            fullWidth
            label="First name"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />

          <TextField
            fullWidth
            label="Last name"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </Stack>
        <TextField
          fullWidth
          autoComplete="username"
          type="email"
          label="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                  <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              fullWidth
              label="Birthday"
              inputFormat="MM/dd/yyyy"
              value={birthday}
              onChange={(newValue) => {
                console.log(newValue);
                const dateObject = new Date(newValue);
                const formatDate =
                  dateObject.getMonth() +
                  '/' +
                  dateObject.getDate() +
                  '/' +
                  dateObject.getFullYear();
                setBirthday(formatDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              fullWidth
              inputFormat="MM/dd/yyyy"
              label="Driving License Date"
              value={drivinglicensedate}
              onChange={(newValue) => {
                console.log(newValue);
                const dateObject = new Date(newValue);
                const formatDate =
                  dateObject.getMonth() +
                  '/' +
                  dateObject.getDate() +
                  '/' +
                  dateObject.getFullYear();
                setDrivinglicensedate(formatDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack> */}
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => handleSubmit()}
      >
        Login
      </LoadingButton>
    </Stack>
  );
}
