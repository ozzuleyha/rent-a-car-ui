/* eslint-disable import/no-unresolved */
import Api from 'src/utils/Api';
import { useState, useEffect } from 'react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Icon } from '@iconify/react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function AddYonetici() {
  const [showPassword, setShowPassword] = useState(false);
  const [ad, setAd] = useState('');
  const [soyad, setSoyad] = useState('');
  const [mail, setMail] = useState('');
  const [parola, setParola] = useState('');
  const [roleId, setRoleId] = useState(3);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleSubmit = () => {
    Api.addUser(ad, soyad, mail, parola, roleId).then((response) => {
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
        label="Yonetici Adi"
        variant="outlined"
        value={ad}
        onChange={(event) => setAd(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Yonetici Soyad"
        variant="outlined"
        value={soyad}
        onChange={(event) => setSoyad(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Yonetici Mail"
        variant="outlined"
        value={mail}
        onChange={(event) => setMail(event.target.value)}
      />
      <TextField
        fullWidth
        type={showPassword ? 'text' : 'password'}
        label="Parola"
        value={parola}
        onChange={(event) => setParola(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword} edge="end">
                <Icon icon={showPassword ? eyeFill : eyeOffFill} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />

      <Button variant="contained" onClick={() => handleSubmit()}>
        Send
      </Button>
    </Box>
  );
}
