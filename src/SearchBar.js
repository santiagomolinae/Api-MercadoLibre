import React, { useEffect, useState } from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    this.props.getProductsList(this.state.searchString);
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value });
  }

  render() {
    return (
      <div>
            <form id="search-form_3">
                <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                        className="search_3"
                />
                <input
                        type="button"
                        onClick={this.handleSubmit}
                        value="Search"
                        className="submit_3"
                />
            </form>
      </div>
    );
  }
}

export default SearchBar;