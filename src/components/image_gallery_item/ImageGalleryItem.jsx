import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageSrc} alt=""></img>
      </li>
    );
  }
}
