import React from 'react';
import People from './People.jsx';
import Home from './Home.jsx';
import Starships from './Starships.jsx';
import Vehicles from './Vehicles.jsx';

import {Link} from 'react-router';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h4> Main App </h4>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
          </ul>
          {this.props.children}
      </div>)
  }
}

export default Main;