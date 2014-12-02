/** @jsx React.DOM */
var React = require('react'),
    CurrentPageMixin = require('../mixins/currentPageMixin');

var HomePage = React.createClass({
  mixins: [CurrentPageMixin],
  getDefaultProps: function(){
    return {pageName: 'home'}
  },
  render: function() {
    return (
      <div>
        <h2>Homepage</h2>
        <a href="#about">about</a>
      </div>
    );
  }
});

module.exports = HomePage;