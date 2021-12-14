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
        console.log(response.data[0]);
        if (response.data[0].UserRoleId === 1) {
          // bu bir müşteri
          navigate('/dashboard/user/cars', { replace: true });
        } else if (response.data[0].UserRoleId === 2) {
          // bu bir çalışan
          navigate('/dashboard/employee/rent-requests', { replace: true });
        } else {
          // bu bir admin
          navigate('/dashboard/admin/app', { replace: true });
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
