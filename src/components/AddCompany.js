/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import Api from 'src/utils/Api';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddCompany() {
  const [companyName, setCompanyName] = useState('');
  const [companyCity, setCompanyCity] = useState('');
  const [companyAdress, setCompanyAdress] = useState('');

  const handleSubmit = () => {
    Api.addCompany(companyName, companyCity, companyAdress).then((response) => {
      window.location.reload();
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
        label="Company Name"
        variant="outlined"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Company City"
        variant="outlined"
        value={companyCity}
        onChange={(event) => setCompanyCity(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Company Adress"
        variant="outlined"
        value={companyAdress}
        onChange={(event) => setCompanyAdress(event.target.value)}
      />
      <Button variant="contained" onClick={() => handleSubmit()}>
        Send
      </Button>
    </Box>
  );
}
