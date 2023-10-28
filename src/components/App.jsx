import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image_gallery/ImageGallery';
import { ImageGalleryItem } from './image_gallery_item/ImageGalleryItem';
import { Loader } from './loader/Loader';
import { Button } from './button/Button';
import css from './App.module.css';
import axios from 'axios';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
  };

  onSubmit = event => {
    this.setState({ query: event });
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=40276547-2ed900adc5a61ed15a312b440&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.error !== null && (
          <p style={{ color: 'red', margin: '0 auto' }}>
            SORRY AN ERROR HAS OCCURRED
            <br />
            Error name: {this.state.error}
          </p>
        )}
        <ImageGallery>
          {this.state.images &&
            this.state.images.map(item => {
              return (
                <ImageGalleryItem
                  key={item.id}
                  imageSrc={item.webformatURL}
                  modalSrc={item.largeImageURL}
                  alt={item.tags}
                />
              );
            })}
        </ImageGallery>
        {this.state.isLoading && <Loader />}
        {this.state.query && <Button onClick={this.nextPage} />}
      </div>
    );
  }
}
