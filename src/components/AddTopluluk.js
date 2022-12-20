/* eslint-disable import/no-unresolved */
import Api from 'src/utils/Api';
import { useState, useEffect } from 'react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function AddTopluluk() {
  const [akademisyenId, setAkademisyenId] = useState('');
  const [toplulukAdi, setToplulukAdi] = useState('');
  const [yoneticiId, setYoneticiId] = useState('');

  const handleSubmit = () => {
    Api.addTopluluk(akademisyenId, yoneticiId, toplulukAdi).then((response) => {
      console.log(response.data);
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
      <TextField
        id="outlined-basic"
        label="Topluluk Adi"
        variant="outlined"
        value={toplulukAdi}
        onChange={(event) => setToplulukAdi(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Akademisyen Id"
        variant="outlined"
        value={akademisyenId}
        onChange={(event) => setAkademisyenId(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Yonetici Id"
        variant="outlined"
        value={yoneticiId}
        onChange={(event) => setYoneticiId(event.target.value)}
      />

      <Button variant="contained" onClick={() => handleSubmit()}>
        Send
      </Button>
    </Box>
  );
}
