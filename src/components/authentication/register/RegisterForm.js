import * as Yup from 'yup';
import * as React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const RegisterSchema = Yup.object().shape({
    UserName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('User name required'),
    Birthday: Yup.date().required('Birthday required'),
    DrivingLicenceDate: Yup.date().required('Driving license date required'),
    FirstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    LastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    Email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    Password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      UserName: '',
      FirstName: '',
      LastName: '',
      Email: '',
      Password: '',
      DrivingLicenceDate: '',
      Birthday: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      values.UserRoleId = 1;
      console.log(values);
      const data = values;

      // fetch('http://localhost:38175/api/User', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //     console.log('Success:', data);
      //   })
      //   .catch((error) => {
      //     console.error('Error:', error);
      //   });
      // navigate('/dashboard', { replace: true });
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Username"
            {...getFieldProps('UserName')}
            error={Boolean(touched.UserName && errors.UserName)}
            helperText={touched.UserName && errors.UserName}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('FirstName')}
              error={Boolean(touched.FirstName && errors.FirstName)}
              helperText={touched.FirstName && errors.FirstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('LastName')}
              error={Boolean(touched.LastName && errors.LastName)}
              helperText={touched.LastName && errors.LastName}
            />
          </Stack>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('Email')}
            error={Boolean(touched.Email && errors.Email)}
            helperText={touched.Email && errors.Email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('Password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.Password && errors.Password)}
            helperText={touched.Password && errors.Password}
          />
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                fullWidth
                label="Birthday"
                {...getFieldProps('Birthday')}
                error={Boolean(touched.Birthday && errors.Birthday)}
                helperText={touched.Birthday && errors.Birthday}
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                fullWidth
                label="Driving License Date"
                {...getFieldProps('DrivingLicenceDate')}
                error={Boolean(touched.DrivingLicenceDate && errors.DrivingLicenceDate)}
                helperText={touched.DrivingLicenceDate && errors.DrivingLicenceDate}
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
