/** @jsx React.DOM */
var React = require('react');

var Control = React.createClass({

  getDefaultProps: function() {
    return {step: 1, valueChangedHandler: function(){}};
  },

  componentDidMount: function() {
    this.lastPosition = { x:0, y:0 };
    this.ticks = 0;
    this.target = this.refs.target.getDOMNode();
    this.target.addEventListener('mousemove', this._detectDirection, false);

    var rect = this.target.getBoundingClientRect();
    var width = rect.right - rect.left;
    var height = rect.bottom - rect.top;
    this.targetCenter = {
      x: rect.left + width/2,
      y: rect.top + height/2
    };
  },

  componentWillUnmount: function() {
    this.target.removeEventListener('mousemove', this._detectDirection, false);
  },

  render: function() {
    return (
      <div className="control" ref="target">
        <span className="label">control</span>
      </div>
    );
  },

  _detectDirection: function(e) {
    this.ticks++;
    if(this.ticks % 5 !== 0) {
      return false;
    }

    var currentPosition = { x:e.x, y:e.y };
    if(this._isLeft(this.lastPosition, currentPosition)) {
      this.props.valueChangedHandler({value: this.props.step});
    } else {
      this.props.valueChangedHandler({value: -this.props.step});
    }

    this.lastPosition = currentPosition;
    this.ticks = 0;
  },

  _isLeft: function (a, b) {
     var c = this.targetCenter;
     return ((b.x - a.x)*(c.y - a.y) - (b.y - a.y)*(c.x - a.x)) > 0;
  }
});

module.exports = Control;
