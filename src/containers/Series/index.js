import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";

class Series extends Component {
  state = {
    series: []
  };

  //used for initial rendering of App Component
  // componentDidMount() {
  //   fetch("http://api.tvmaze.com/search/shows?q=vikings")
  //     .then(response => response.json())
  //     .then(json => this.setState({ series: json }));
  // }

  onSeriesInputChange = e => {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json }));
  };

  render() {
    return (
      <div>
        The length of series array = {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange} />
        </div>
        <SeriesList list={this.state.series} />
      </div>
    );
  }
}

export default Series;
