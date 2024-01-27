import { createTheme } from '@mui/material/styles';

const themes = createTheme({
  palette: {
    primary: {
      main: '#F8F8FF',
    },
    secondary: {
      main: '#292929',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
  },
  progressCircle: {
    width: '40px', // Reduced size for better fit
    height: '40px', // Reduced size for better fit
    borderRadius: '50%', // Perfectly round shape
    background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Added subtle shadow for depth
  },
  progressText: {
    fontSize: '16px', // Reduced font size for better fit
    fontWeight: 'bold',
    color: '#202020', // Adjusted to primary text color
  },
});

export default themes;