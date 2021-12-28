import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function CarInformation(props) {
  console.log(props.carId);
  console.log('propslar burada', props.car);
  return (
    <div>
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
    </div>
  );
}
