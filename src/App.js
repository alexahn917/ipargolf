import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Home from './components/Home';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#749afd',
      main: '#365fb5',
      dark: '#1a5284',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FF8A80',
      main: '#E53935',
      dark: '#B71C1C',
      contrastText: '#FFEBEE',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Cambay', 'Sunflower', 'sans-serif', '-apple-system', 'BlinkMacSystemFont'],
    fontSize: '14',
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '500',
  },
});

const flexibleTheme = {
  ...theme,
  overrides: {
    MuiTypography: {
      h1: {
        [theme.breakpoints.down('md')]: {
          fontSize: '4.5rem',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '3rem',
        },
      },
      h2: {
        [theme.breakpoints.down('md')]: {
          fontSize: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '2rem',
        },
      },
      h3: {
        [theme.breakpoints.down('md')]: {
          fontSize: '2.5rem',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.5rem',
        },
      },
      h4: {
        [theme.breakpoints.down('md')]: {
          fontSize: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '1.3rem',
        },
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={flexibleTheme}>
          <Home/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
