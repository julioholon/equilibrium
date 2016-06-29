import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const style = {padding: 0};

const Home = () => (
  <div>
      <AppBar title="Equilibrium"
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton style={style}>
                <Avatar
                  color={deepOrange300}
                  backgroundColor={purple500}
                  size={40}
                >
                A
                </Avatar>
              </IconButton>
            }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      }
    />
        <Drawer width={200} open={false} >
          <MenuItem>Menu Item</MenuItem>
        </Drawer>
    <p>
      Welcome to Mantra 0.2.0. <RaisedButton label="Test Button" />
    </p>
    <ul>
      <li>
        Read <a target="_blank" href="https://kadirahq.github.io/mantra/">spec</a>
      </li>
      <li>
        Learn <a target="_blank" href="https://github.com/sungwoncho/mantra-cli#commands">CLI</a>
      </li>
    </ul>
  </div>
);

export default Home;
