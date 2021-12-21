/* eslint-disable no-nested-ternary */
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// material
import { alpha } from '@mui/material/styles';
import { Button, Box, Divider, Typography, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
//
import account from '../../_mocks_/account';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {JSON.parse(localStorage.getItem('userInformations')).UserRoleId === 1
              ? `${JSON.parse(localStorage.getItem('userInformations')).CustomerName} ${
                  JSON.parse(localStorage.getItem('userInformations')).CustomerSurname
                }`
              : JSON.parse(localStorage.getItem('userInformations')).UserRoleId === 2
              ? `${JSON.parse(localStorage.getItem('userInformations')).EmployeeName} ${
                  JSON.parse(localStorage.getItem('userInformations')).EmployeeSurname
                }`
              : 'Çınar AYDIN'}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            onClick={() => {
              localStorage.removeItem('userInformations');
              navigate('/login', { replace: true });
            }}
          >
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
