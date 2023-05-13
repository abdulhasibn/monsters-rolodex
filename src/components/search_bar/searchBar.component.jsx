import { Component } from "react";
import "./search-box.styles.css";

class SearchBar extends Component {
  render() {
    const onSearchChange = this.props.onSearchChange;
    return (
      <input
        name="search_box"
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeHolder}
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBar;
