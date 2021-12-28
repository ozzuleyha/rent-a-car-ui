/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
// material

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Container, Stack, Box, Modal, Typography, Button } from '@mui/material';

import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
// components
import Page from '../components/Page';
import { CarList } from '../components/_dashboard/cars';
import AddCar from '../components/AddCar';
//
import PRODUCTS from '../_mocks_/products';
import Api from 'src/utils/Api';

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

export default function Cars() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cars, setCars] = useState([]);

  const companyId = JSON.parse(localStorage.getItem('userInformations')).CompanyId;

  const loadData = () => {
    Api.getCarList().then((response) => {
      console.log('Carlist', response.data);
      setCars(response.data);
    });
  };
  useEffect(() => {
    console.log(companyId);
    loadData();
  }, []);
  return (
    <Page title="Dashboard: Products | Minimal-UI">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Cars
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Button
            onClick={handleOpen}
            variant="contained"
            component={RouterLink}
            style={
              JSON.parse(localStorage.getItem('userInformations')).UserRoleId === 2
                ? { display: 'block' }
                : { display: 'none' }
            }
            to="#"
          >
            <Icon icon={plusFill} style={{ fontSize: 22, paddingTop: 7 }} />
            New Car
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <AddCar />
            </Box>
          </Modal>
        </Stack>

        <CarList cars={cars} />
      </Container>
    </Page>
  );
}
