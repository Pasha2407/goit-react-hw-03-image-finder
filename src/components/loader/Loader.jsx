import React, { Component } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <div style={{ margin: '0 auto' }}>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#763fb5"
        />
      </div>
    );
  }
}
