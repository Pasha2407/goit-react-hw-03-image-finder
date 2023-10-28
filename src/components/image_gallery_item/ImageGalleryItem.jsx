import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
    });
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          src={this.props.imageSrc}
          alt={this.props.alt}
          onClick={this.openModal}
        ></img>
        {this.state.isOpenModal && (
          <Modal
            modalSrc={this.props.modalSrc}
            alt={this.props.alt}
            closeModal={this.closeModal}
          />
        )}
      </li>
    );
  }
}
