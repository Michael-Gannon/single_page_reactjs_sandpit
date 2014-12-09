/** @jsx React.DOM */
var React = require('react'),
    CurrentPageMixin = require('../mixins/currentPageMixin'),
    SegmentControl = require('../lib/segmentControl');

var HomePage = React.createClass({

  mixins: [CurrentPageMixin],

  getDefaultProps: function(){
    return { pageName: 'home' };
  },

  render: function() {
    return (
      <div>
        <h2>Homepage</h2>
        <a href="#about">about</a>
        <div>
          <SegmentControl value={0} step={1} />
          <SegmentControl value={0} step={2} />
          <SegmentControl value={0} step={0.50} />
          <SegmentControl value={0} step={0.25} />
        </div>
      </div>
    );
  }
});

module.exports = HomePage;