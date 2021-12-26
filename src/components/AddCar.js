/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Api from 'src/utils/Api';

export default function AddCompany() {
  const [airbag, setAirbag] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [rentPrice, setRentPrice] = useState('');
  const [requiredLicenseAge, setRequiredLicenseAge] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  // const [companyId, setCompanyId] = React.useState('');

  const companyId = JSON.parse(localStorage.getItem('userInformations')).CompanyId;

  const handleSubmit = () => {
    Api.addCar(
      carName,
      carModel,
      rentPrice,
      requiredLicenseAge,
      seatingCapacity,
      airbag,
      companyId
    ).then((response) => {
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
      <Input accept="image/*" id="icon-button-file" type="file" />
      <TextField
        id="outlined-basic"
        label="Car Name"
        value={carName}
        onChange={(event) => setCarName(event.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Car Model"
        value={carModel}
        onChange={(event) => setCarModel(event.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Rent Price"
        value={rentPrice}
        onChange={(event) => setRentPrice(event.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Required License Age"
        value={requiredLicenseAge}
        onChange={(event) => setRequiredLicenseAge(event.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Seating Capacity"
        value={seatingCapacity}
        onChange={(event) => setSeatingCapacity(event.target.value)}
        variant="outlined"
      />{' '}
      {/* seating capacity de airbag gibi yapabilirsin */}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Airbag</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={airbag}
            label="Airbag"
            onChange={(event) => setAirbag(event.target.value)}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={handleSubmit}>
        Send
      </Button>
    </Box>
  );
}
