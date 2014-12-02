/** @jsx React.DOM */
var React = require('react'),
    CurrentPageMixin = require('../mixins/currentPageMixin');

var AboutPage = React.createClass({
  mixins: [CurrentPageMixin],
  getDefaultProps: function(){
    return {pageName: 'about'}
  },
  render: function() {
    return (
      <div>
        <h2>About</h2>
        <a href="#home">home</a>
      </div>
    );
  }
});

module.exports = AboutPage;