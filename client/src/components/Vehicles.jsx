import React from 'react';
import Vehicle from './vehicle';

const Vehicles = React.createClass({
  render: function () {
    console.log(this.props.vehicles)
    const vehiclesNodes = this.props.vehicles.map(function (vehicles, index) {
      return ( 
          <Vehicle 
          name={ vehicles.name }
          key={index}/>
        )
    })

    return (
      <div className="vehicles">
        <h1>vehicles</h1>
          {vehiclesNodes}
      </div>
      )
  }
});

module.exports = Vehicles;