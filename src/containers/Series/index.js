import React, { Component } from "react";

class Series extends Component {
  state = {
    series: []
  };

  //used for initial rendering of App Component
  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=vikings")
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  }

  render() {
    return <div>The length of series array = {this.state.series.length}</div>;
  }
}

export default Series;
