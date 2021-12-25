/* eslint-disable import/no-unresolved */
import Api from 'src/utils/Api';
import { useState } from 'react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function UpdateEmployee(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [employeeName, setEmployeeName] = useState(props.employee.EmployeeName);
  const [employeeSurname, setEmployeeSurname] = useState(props.employee.EmployeeSurname);
  const [username, setUsername] = useState(props.user.UserName);
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleSubmit = () => {
    Api.updateUserEmployee(props.employee.userId, username, password).then(() => {
      Api.updateEmployee(props.employee.id, employeeName, employeeSurname).then(() =>
        window.location.reload()
      );
    });
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Employee Name"
        variant="outlined"
        value={employeeName}
        onChange={(event) => setEmployeeName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Employee Surname"
        variant="outlined"
        value={employeeSurname}
        onChange={(event) => setEmployeeSurname(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
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
      <Button variant="contained" onClick={() => handleSubmit()}>
        Update
      </Button>
    </Box>
  );
}
