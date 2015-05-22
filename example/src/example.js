var React = require('react');
var ReactGeoLocation = require('react-geo-location');

var App = React.createClass({

  _getCoords: function(coords) {
    this.setState({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  },

  getInitialState: function() {
    return {
      lat: null,
      lng: null 
    };
  },

  render: function() {
    return (
      <div>
        <ReactGeoLocation getCoords={this._getCoords} />
        <div>lat: {this.state.lat}, lng: {this.state.lng}</div>
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));
