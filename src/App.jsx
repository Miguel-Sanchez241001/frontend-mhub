import { useState } from 'react'
import Navbar from './components/NavBar/Navbar'
import MenuPage from './components/Menu/Menu.jsx'
import Body from './components/Body/Body'
import './reset.css'; // Asegúrate de que la ruta sea correcta
import { Drawer, Box, Grid } from '@mui/material';

function App() {
  return (
    <>
      <Navbar username={"usuario"} />
      <div className='cuerpo'>
      <MenuPage></MenuPage>
      <Body></Body>
      </div>
    </>
  );
}

export default App;
