import React from 'react';
import ReactLoaderSpinner from 'react-loader-spinner';
import './loader.scss';

const Loader = props => {
  return (
    <div className="loader-backdrop">
      <ReactLoaderSpinner
        // type="CradleLoader" 
        // type="Grid"
        type="Oval"
        color="#002d72"
        height={60}
        width={60}
      />
    </div>
  );
};

export default Loader;
