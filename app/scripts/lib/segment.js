/** @jsx React.DOM */
var React = require('react');

var Segment = React.createClass({
  render: function() {
    return (
      <div className="segment">{this.props.val}</div>
    );
  }
});

module.exports = Segment;