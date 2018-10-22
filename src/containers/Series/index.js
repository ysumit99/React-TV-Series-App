import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isfetching: false
  };

  //used for initial rendering of App Component
  // componentDidMount() {
  //   fetch("http://api.tvmaze.com/search/shows?q=vikings")
  //     .then(response => response.json())
  //     .then(json => this.setState({ series: json }));
  // }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isfetching: true });

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isfetching: false }));
  };

  render() {
    const { series, seriesName, isfetching } = this.state;

    return (
      <div>
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange}
          />
        </div>
        {!isfetching &&
          series.length === 0 &&
          seriesName.trim() === "" && (
            <p>Please enter series name into the input</p>
          )}
        {!isfetching &&
          series.length === 0 &&
          seriesName.trim() !== "" && (
            <p>No Tv Series have been found with this name</p>
          )}
        {isfetching && <Loader />}
        {!isfetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
