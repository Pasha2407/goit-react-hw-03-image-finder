import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image_gallery/ImageGallery';
import { ImageGalleryItem } from './image_gallery_item/ImageGalleryItem';
import { Loader } from './loader/Loader';
import { Button } from './button/Button';
// import { Modal } from './modal/Modal';
import css from './App.module.css';
import axios from 'axios';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
    query: '',
  };

  componentDidUpdate(_, prevState) {
    const query = this.state.query;
    if (query !== prevState.query) {
      this.fetchImages(query);
    }
  }

  fetchImages = async query => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=1&key=40276547-2ed900adc5a61ed15a312b440&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({
        images: data.hits,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  searchImage = event => {
    console.log(event);
    this.setState({ query: event });
  };
  render() {
    return (
      <div className={css.App}>
        <Searchbar searchImage={this.searchImage} />
        <ImageGallery>
          {this.state.error !== null && (
            <p>Oops, some error occured... Error message: {this.state.error}</p>
          )}
          {this.state.isLoading && <Loader />}
          {this.state.images !== null &&
            this.state.images.map(item => {
              return (
                <ImageGalleryItem
                  key={item.id}
                  imageSrc={item.webformatURL}
                  alt={item.tags}
                />
              );
            })}
        </ImageGallery>
        <Button />
      </div>
    );
  }
}
