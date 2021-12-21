// material
import { Box, Grid, Container, Typography } from '@mui/material';

// components
import Page from '../components/Page';
import {
  UserCount,
  EmployeeCount,
  CarCount,
  CompanyCount,
  AppOrderTimeline
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CompanyCount />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <UserCount />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CarCount />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <EmployeeCount />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
