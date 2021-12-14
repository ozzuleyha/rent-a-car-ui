import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function AddCompany() {
  const [airbag, setAirbag] = React.useState('');

  const handleChange = (event) => {
    setAirbag(event.target.value);
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
      <TextField id="outlined-basic" label="Car Name" variant="outlined" />
      <TextField id="outlined-basic" label="Car Model" variant="outlined" />
      <TextField id="outlined-basic" label="Rent Price" variant="outlined" />
      <TextField id="outlined-basic" label="Required License Age" variant="outlined" />
      <TextField id="outlined-basic" label="Seating Capacity" variant="outlined" />{' '}
      {/* seating capacity de airbag gibi yapabilirsin */}
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Airbag</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={airbag}
            label="Airbag"
            onChange={handleChange}
          >
            <MenuItem value={1}>Yes</MenuItem>
            <MenuItem value={0}>No</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button variant="contained">Send</Button>
    </Box>
  );
}
