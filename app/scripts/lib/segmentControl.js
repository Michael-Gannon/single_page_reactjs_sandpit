/** @jsx React.DOM */
var React = require('react'),
    Segment = require('./segment'),
    Control = require('./control');

var SegmentControl = React.createClass({

  getDefaultProps: function() {
    return {min: 0, max: 12, valueChangedHandler: function(){}}
  },

  getInitialState: function() {
    return {value: this.props.value};
  },

  render: function() {
    return (
      <div className="segmentControl">
        <Segment val={this.state.value} />
        <Control valueChangedHandler={this._changedValue} step={this.props.step}/>
      </div>
    );
  },

  _changedValue: function(e) {
    if((this.state.value === this.props.max && e.value > 0) ||
       (this.state.value === this.props.min && e.value < 0)) {
      return false;
    }
    this.setState({ value: this.state.value + e.value });
    this.props.valueChangedHandler({value: this.state.value});
  }
});

module.exports = SegmentControl;
