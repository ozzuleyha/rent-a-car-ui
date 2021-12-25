/* eslint-disable import/no-unresolved */
import Api from 'src/utils/Api';
import { useState, useEffect } from 'react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function UpdateEmployee() {
  const [showPassword, setShowPassword] = useState(false);
  const [companyId, setCompanyId] = useState('');
  const [companies, setCompanies] = useState([]);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeSurname, setEmployeeSurname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loadData = () => {
    Api.getCompanyList().then((response) => {
      console.log(response.data);
      setCompanies(response.data);
    });
  };
  useEffect(() => {
    console.log('hayat');
    loadData();
  }, []);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleSubmit = () => {
    Api.addUserEmployee(username, password).then((response) => {
      console.log(response.data);
      Api.addEmployee(employeeName, employeeSurname, companyId);
      window.location.reload();
    });
  };

  const handleChange = (event) => {
    setCompanyId(event.target.value);
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
      {/* <TextField id="outlined-basic" label="Company Name" variant="outlined" /> */}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Company Name"
            onChange={handleChange}
          >
            {companies.map((company, index) => (
              <MenuItem value={company.id} key={index}>
                {company.CompanyName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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
