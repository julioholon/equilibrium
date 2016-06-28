import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Home = () => (
  <div>
    <h1>Sample</h1>
    <p>
      Welcome to Mantra 0.2.0. <RaisedButton label="Default" />
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
