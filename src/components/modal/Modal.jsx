import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  overayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.overayClick}>
        <div className={css.Modal}>
          <img src={this.props.modalSrc} alt={this.props.alt} />
        </div>
      </div>
    );
  }
}
