import { createMuiTheme } from '@material-ui/core/styles';
//import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009CB8',
    },
    secondary: {
      main: '#FF8482',
    },
    error: {
      main: '#f26f9d',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;