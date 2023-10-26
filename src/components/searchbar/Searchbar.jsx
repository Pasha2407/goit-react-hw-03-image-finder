import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export class Searchbar extends Component {
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit">
            <IconContext.Provider value={{ size: 30 }}>
              <FcSearch />
            </IconContext.Provider>
          </button>
          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images"
          />
        </form>
      </header>
    );
  }
}
