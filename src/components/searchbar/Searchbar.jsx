import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  InputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  Submit = event => {
    event.preventDefault();
    this.props.searchImage(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.Submit}>
          <button type="submit">
            <IconContext.Provider value={{ size: 25 }}>
              <FcSearch />
            </IconContext.Provider>
          </button>
          <input
            type="text"
            // autocomplete="off"
            //autofocus
            placeholder="Search images"
            name="search"
            onChange={this.InputChange}
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}
