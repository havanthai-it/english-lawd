import React from 'react';
import MainTheme from './core/templates/themes/main-theme'
import Header from './core/header/header-view';
import Body from './core/body/body-view';
import Footer from './core/footer/footer-view';
import { ThemeProvider } from '@material-ui/styles';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={MainTheme}>
        <div className="app">
          <Header />
          <Body />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
