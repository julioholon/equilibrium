import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Layout = ({content = () => null }) => (
  <div>
    <div>
    <MuiThemeProvider>
      {content()}
    </MuiThemeProvider>
    </div>
  </div>
);

export default Layout;
