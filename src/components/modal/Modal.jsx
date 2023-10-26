import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    return (
      <div className={css.Overlay}>
        <div class={css.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
