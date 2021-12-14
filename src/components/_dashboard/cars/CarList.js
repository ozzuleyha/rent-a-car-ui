import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import RentCarCard from './CarCard';

// ----------------------------------------------------------------------

CarList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default function CarList({ cars, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {cars.map((car) => (
        <Grid key={car.id} item xs={12} sm={6} md={3}>
          <RentCarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );
}
