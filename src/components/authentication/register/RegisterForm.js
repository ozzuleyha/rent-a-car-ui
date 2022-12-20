/* eslint-disable prefer-template */
import * as React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Api from '../../../utils/Api';
// import DatePicker from '@mui/lab/DatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import { now } from 'lodash';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [mail, setMail] = useState();
  const [parola, setParola] = useState();
  const [ad, setAd] = useState();
  const [soyad, setSoyad] = useState();
  const [roleId, setRoleId] = useState(4);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = () => {
    Api.addUser(ad, soyad, mail, parola, roleId).then((response) => {
      const userInformation = { role_id: 4, Ad: ad, Soyad: soyad };
      navigate('/dashboard/ogrenci/topluluk', { replace: true });
      localStorage.setItem('userInformations', JSON.stringify(userInformation));
    });
  };
  return (
    <Stack>
      <Stack spacing={3} sx={{ my: 2 }}>
        <TextField
          fullWidth
          label="Ad"
          value={ad}
          onChange={(event) => setAd(event.target.value)}
        />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <TextField
            fullWidth
            label="Soyad"
            value={soyad}
            onChange={(event) => setSoyad(event.target.value)}
          />
        </Stack>
        <TextField
          fullWidth
          autoComplete="username"
          type="email"
          label="Email address"
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
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={() => handleSubmit()}
      >
        Login
      </LoadingButton>
    </Stack>
  );
}
