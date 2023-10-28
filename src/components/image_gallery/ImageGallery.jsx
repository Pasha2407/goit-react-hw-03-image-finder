import React, { Component } from 'react';
import { ImageGalleryItem } from '../image_gallery_item/ImageGalleryItem';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.ImageGallery}>
        {this.props.imagesData &&
          this.props.imagesData.map(item => {
            return (
              <ImageGalleryItem
                key={item.id}
                imageSrc={item.webformatURL}
                modalSrc={item.largeImageURL}
                alt={item.tags}
              />
            );
          })}
      </ul>
    );
  }
}
