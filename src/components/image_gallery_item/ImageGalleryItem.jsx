import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img src={this.props.imageSrc} alt={this.props.alt}></img>
      </li>
    );
  }
}
