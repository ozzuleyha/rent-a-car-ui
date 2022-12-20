import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Api from '../../../utils/Api';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleSubmit = () => {
    console.log(username, password);
    Api.login(username, password).then((response) => {
      if (response.data === 'Yanlış bilgi girildi!') {
        alert(response.data);
        setUsername('');
        setPassword('');
      } else {
        console.log(response.data);
        if (response.data[0].role_id === 1) {
          localStorage.setItem('userInformations', JSON.stringify(response.data[0]));
          // bu bir admin
          navigate('/dashboard/admin/topluluk', { replace: true });
        } else if (response.data[0].role_id === 2) {
          localStorage.setItem('userInformations', JSON.stringify(response.data[0]));
          // bu bir akademisyen
          navigate('/dashboard/employee/rent-requests', { replace: true });
        } else if (response.data[0].role_id === 3) {
          localStorage.setItem('userInformations', JSON.stringify(response.data[0]));
          navigate('/dashboard/yonetici/duyuru', { replace: true });
          // bu bir yonetici
        } else if (response.data[0].role_id === 4) {
          localStorage.setItem('userInformations', JSON.stringify(response.data[0]));
          // bu bir ogrenci
          navigate('/dashboard/ogrenci/topluluk', { replace: true });
        }
      }
    });
  };

  return (
    <Stack>
      <Stack spacing={3} sx={{ my: 2 }}>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
