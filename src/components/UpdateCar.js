/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-template */
/* eslint-disable import/no-unresolved */
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Api from 'src/utils/Api';

export default function AddCompany(props) {
  const [airbag, setAirbag] = useState('');
  const [carName, setCarName] = useState(props.car.CarName);
  const [carModel, setCarModel] = useState(props.car.CarModel);
  const [rentPrice, setRentPrice] = useState(props.car.RentPrice);
  const [requiredLicenseAge, setRequiredLicenseAge] = useState(props.car.RequiredLicenseAge);
  const [seatingCapacity, setSeatingCapacity] = useState(props.car.SeatingCapacity);
  const [imageName, setImageName] = useState('anonymous.jpg');
  // const [companyId, setCompanyId] = React.useState('');

  const companyId = JSON.parse(localStorage.getItem('userInformations')).CompanyId;
  const handleSubmit = () => {
    Api.updateCar(
      props.carId,
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

  //   const handleFileSelected = (event) => {
  //     console.log(event);
  //     const formData = new FormData();
  //     formData.append('PhotoFile', event.target.files[0]);
  //     for (const [key, value] of formData.entries()) {
  //       console.log(key, value);
  //     }
  //     // formData.append('myFile', event.target.files[0]);
  //     console.log(formData);
  //     Api.saveFile(formData)
  //       .then((response) => {
  //         console.log(response);
  //         setImageName(event.target.files[0].name);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      {/* <Avatar
        alt="Remy Sharp"
        style={{ width: 200, height: 200 }}
        src={'http://localhost:38175/Photos/' + imageName}
      />
      <Input onChange={handleFileSelected} id="icon-button-file" type="file" /> */}
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
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained" onClick={handleSubmit}>
        Send
      </Button>
    </Box>
  );
}
