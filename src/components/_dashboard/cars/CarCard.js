/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CarInformation from 'src/components/CarInformation';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

// ----------------------------------------------------------------------

RentCarCard.propTypes = {
  car: PropTypes.object
};

export default function RentCarCard({ car }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cover, CarModel, CarName, RentPrice, id, SeatCapacity, Airbag } = car;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {/* {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
        )} */}
        <ProductImgStyle alt={CarName} src="http://localhost:38175/Photos/car_2.jpg" />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link
          to="#"
          color="inherit"
          underline="hover"
          component={RouterLink}
          onClick={handleOpen}
          key={id}
        >
          <Typography variant="subtitle2" noWrap>
            {CarModel} Model
          </Typography>
          <Typography variant="subtitle2" noWrap>
            {CarName}
          </Typography>
        </Link>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CarInformation carId={id} cars={car} />
            </Box>
          </Modal>
        </div>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Typography variant="subtitle1">
            {/* <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through'
              }}
            >
              {RentPrice}
            </Typography>
            &nbsp; */}
            {RentPrice}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
