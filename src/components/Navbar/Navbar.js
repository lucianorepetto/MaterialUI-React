import React from 'react'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { mainNavbarItems } from './consts/navbarListItems';
import {useNavigate} from 'react-router-dom'
import { IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import MainAppBar from './AppBar';

const drawerWidth = 240;

function Navbar() {
  const navigate = useNavigate();

  const buttonStyles = {
    fontWeight: 600,
    margin: '10px',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    borderRadius: 2.5, 
    '&.MuiButton-contained': {
      backgroundColor: blue[500],
      '&.hover': {
        backgroundColor: '#006db3'
      }
    },
    '&.MuiButton-outlined': {
      color: '#fff',
      borderColor: '#fff',
      '&.hover': {
        backgroundColor: 'transparent'
      }
    },
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    return <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem key={item} 
          onClick={()=> navigate(item.route)}
          disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color: 'rgba(255, 255, 255, 0.7)'}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  }
  const anchor = 'right'
  return (
    <React.Fragment key={anchor}>
      <MainAppBar toggleDrawer={toggleDrawer}/> 
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: 'white'
          },
        }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  )
}

export default Navbar