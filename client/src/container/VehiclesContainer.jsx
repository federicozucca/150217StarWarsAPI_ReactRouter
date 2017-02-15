import React from 'react';
const Vehicles = require('../components/Vehicles');

const VehiclesContainer = React.createClass({
  getInitialState: function () {
    return { vehicles: []}
  },
  componentDidMount: function() {
    const url = 'http://swapi.co/api/vehicles/?format=json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status === 200) {
        const data = JSON.parse(request.responseText);
        this.setState({vehicles: data.results})
      }
    }
    request.send();
  },
  render: function() {
    return(
      <div>
      <Vehicles vehicles={this.state.vehicles}/>
      </div>
      );
  }
});

module.exports = VehiclesContainer;