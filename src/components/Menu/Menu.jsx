import * as React from 'react'
import './menustyle.css'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
 

function MenuPage() {
 

  return (
    <>
   <div className='menu'>
   <Typography variant="h6" component="div"       sx={{
        backgroundColor: '#C8D7E3', // Color de fondo
        color: 'black',           // Color de texto
        padding: '10px',
        fontWeight: 'bold'  // Establece el texto en negrit
       }}
    >
       MENU
   </Typography>
 
   <Paper sx={{ backgroundColor: 'rgb(241, 241, 241)', width: '100%', maxWidth: '100%' }}>
   <MenuList>
            <MenuItem>
                <ListItemText primary="- Agentes Externos" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Interfases" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Mapas" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Esquemas" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Componentes" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Parametros" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Refrescar Cambios" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Probar Procesos Externos" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Log Auditoria" />
            </MenuItem>
            <MenuItem>
                <ListItemText primary="- Usuario" />
            </MenuItem>
        </MenuList>
    </Paper>
   </div>
    </>
  )
}

export default MenuPage