/** @jsx React.DOM */
var React = window.React = require('react'),
    HomePage = require("./pages/homePage"),
    AboutPage = require("./pages/aboutPage");

var App = React.createClass({
  getInitialState: function() {
    return {currentPage: 'home'};
  },
  componentWillMount: function() {
    if(window.location.hash.slice(1).length > 0) {
      this._navigateTo(window.location.hash.slice(1));
    }
  },
  handleClick: function(e) {
    if(e.target.attributes.href && e.target.attributes.href.value[0] === '#') {
      e.preventDefault();
      this._navigateTo(e.target.attributes.href.value.slice(1));
    }
  },
  render: function() {
    return (
      <div className="container" onClick={this.handleClick}>
        <div className="header">
            <ul className="nav nav-pills pull-right">
                <li className="active"><a href="#home">Home</a></li>
                <li className="active"><a href="#about">About</a></li>
            </ul>
            <h3 className="text-muted">static single page sandpit</h3>
        </div>

        <div className="jumbotron">
          <HomePage currentPage={this.state.currentPage}/>
          <AboutPage currentPage={this.state.currentPage}/>
        </div>

        <div className="footer">
          <a href="http://www.google.com">google it</a>
        </div>
      </div>
    );
  },
  _navigateTo: function(navigateTo) {
    if(this.state.currentPage !== navigateTo) {
      this.setState({currentPage: navigateTo});
      window.history.pushState({}, null, '#'+navigateTo);
    }
  }
});

React.renderComponent(<App />, document.getElementById("app"));