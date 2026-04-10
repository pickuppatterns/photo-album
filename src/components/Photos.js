import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function Photos({ urls }) {
  return (
    <>
      {urls.map(url => (
        <Photo key={url} url={url} />
      ))}
    </>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;