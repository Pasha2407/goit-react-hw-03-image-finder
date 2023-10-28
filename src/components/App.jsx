import { Component } from 'react';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image_gallery/ImageGallery';
import { Loader } from './loader/Loader';
import { Button } from './button/Button';
import { api } from './API';
import css from './App.module.css';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
    loadMore: false,
  };

  onSubmit = event => {
    this.setState({ query: event, images: [], page: 1 });
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
      const { data } = await api(this.state.query, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loadMore: true,
      }));
      if (this.state.page >= Math.ceil(data.totalHits / 12)) {
        this.setState({
          loadMore: false,
        });
      }
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
        <ImageGallery imagesData={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.loadMore && <Button onClick={this.nextPage} />}
      </div>
    );
  }
}
