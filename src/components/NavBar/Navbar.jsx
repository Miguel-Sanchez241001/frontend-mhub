import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = ({ username }) => {
  return (
    <AppBar position="static" sx={{ background: 'black' }}> {/* Fondo negro del AppBar */}
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Consola de Administración de Interfases
        </Typography>
          {/* Nombre del usuario al lado izquierdo */}
          <Typography >
            {username}
          </Typography>

          {/* Botón de cerrar sesión al lado derecho */}
          <Button color="inherit" onClick={() => console.log('Cerrar sesión')}>
            Salir
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
