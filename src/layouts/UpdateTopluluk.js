/* eslint-disable import/no-unresolved */
import Api from 'src/utils/Api';
import { useState } from 'react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function UpdateTopluluk(props) {
  const [toplulukAdi, setToplulukAdi] = useState(props.topluluk.topluluk_adi);
  const [akademisyenId, setAkademisyenId] = useState(props.topluluk.akademisyen_id);
  const [yoneticiId, setYoneticiId] = useState(props.topluluk.yonetici_kullanici_id);

  const handleSubmit = () => {
    console.log(yoneticiId);
    Api.updateTopluluk(props.topluluk.id, toplulukAdi, akademisyenId, yoneticiId).then(() => {
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
        Update
      </Button>
    </Box>
  );
}
