/* eslint-disable import/no-unresolved */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack } from '@mui/material';
import Api from 'src/utils/Api';

export default function CarInformation(props) {
  console.log(props.carId);
  console.log('propslar burada', props.car);

  const rentCustomerId = JSON.parse(localStorage.getItem('userInformations')).id;
  const situationId = 1;
  const carStartKm = 2000;
  const carFinalKm = 3000;

  const handleSubmit = () => {
    Api.addRentInformation(
      situationId,
      carStartKm,
      carFinalKm,
      props.car.RentPrice,
      rentCustomerId,
      props.car.id
    ).then((response) => {
      window.location.reload();
    });
  };
  return (
    <Stack>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {props.car.CarName}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Car Model: {props.car.CarModel}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Rent Price: ${props.car.RentPrice}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Seating Capacity: {props.car.SeatingCapacity}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Airbag: {props.car.Airbag}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Required License Age: {props.car.RequiredLicenseAge}
      </Typography>

      <Button onClick={() => handleSubmit()} style={{ marginTop: 20 }} variant="contained">
        Rent This Car
      </Button>
    </Stack>
  );
}
