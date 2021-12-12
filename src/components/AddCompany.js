import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddCompany() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Company Name" variant="outlined" />
      <TextField id="outlined-basic" label="Company City" variant="outlined" />
      <TextField id="outlined-basic" label="Company Adress" variant="outlined" />
      <Button variant="contained">Send</Button>
    </Box>
  );
}
