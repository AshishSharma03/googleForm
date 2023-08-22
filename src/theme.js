// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673AB7', 
    },
    secondary: {
      main: '#1976D2', 
    },
    error: {
        main: '#FF5722', 
      },
    success :{
      main :"#34A853"
    }
  
  },
  typography: {
    button: {
      textTransform: 'capitalize', 
      fontFamily: [
        '"Google Sans"',
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  },
});

export default theme;
