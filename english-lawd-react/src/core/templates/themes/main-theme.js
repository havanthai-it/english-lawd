import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const MainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff2626'
    },
    secondary: {
      main: '#012c4b'
    }
  },
  typography: {
    fontFamily: '\'Work Sans\', sans-serif'
  },
  overrides: {
    MuiGrid: {
      item: {
      }
    },
    MuiButton: {
      root: {
        textTransform: 'inherit'
      }
    },
    MuiTextField: {
      root: {
        width: '100%'
      }
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderWidth: '1px',
          borderColor: 'inherit'
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'inherit'
        }
      }
    }
  }
});

export default MainTheme;
