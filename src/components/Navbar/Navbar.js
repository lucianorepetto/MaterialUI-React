import React from 'react'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { mainNavbarItems } from './consts/navbarListItems';
import {useNavigate} from 'react-router-dom'

const drawerWidth = 240;

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
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
        variant="permanent"
        anchor="left"
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
      </Drawer>
    </div>
  )
}

export default Navbar