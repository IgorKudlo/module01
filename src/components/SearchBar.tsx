import React, { ChangeEvent, Component } from 'react';

type SearchBarStateType = {
  search: string;
};

class SearchBar extends Component<Record<string, never>, SearchBarStateType> {
  state = {
    search: '',
  };

  componentDidMount() {
    const dataLocalStorage: string | null = localStorage.getItem('search');
    if (dataLocalStorage) {
      this.setState({ search: dataLocalStorage });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.search);
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: e.target.value });
    localStorage.setItem('search', this.state.search);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter text"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBar;
