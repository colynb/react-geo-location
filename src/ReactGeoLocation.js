var React = require('react');

var ReactGeoLocation = React.createClass({
  
  _handleGeoPosition: function(position) {
    this.props.getCoords(position.coords);
  },

  _handleClick: function(e) {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._handleGeoPosition);
    }
  },

  render: function() {
    return <a href="#" onClick={this._handleClick}>Detect location</a>;
  }
  
});

module.exports = ReactGeoLocation;
