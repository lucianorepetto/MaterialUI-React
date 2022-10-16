import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Grid container spacing={2}>
      <Navbar/>
      <Outlet />
    </Grid>
  );
}

export default App;
