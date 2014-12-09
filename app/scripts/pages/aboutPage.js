/** @jsx React.DOM */
var React = require('react'),
    CurrentPageMixin = require('../mixins/currentPageMixin'),
    Control = require('../lib/control');

var AboutPage = React.createClass({
  mixins: [CurrentPageMixin],
  getDefaultProps: function(){
    return {pageName: 'about'}
  },

  getInitialState: function(){
    return { color: 0 };
  },
  render: function() {
    var divStyle = {
      backgroundColor: "#" + (this.state.color*100000).toString(16)
    };

    return (
      <div style={divStyle}>
        <h2>About</h2>
        <a href="#home">home</a>
        <Control valueChangedHandler={this._colorMe}/>
      </div>
    );
  },

  _colorMe: function(e) {
    this.setState({ color: this.state.color + e.value });
  }

});

module.exports = AboutPage;