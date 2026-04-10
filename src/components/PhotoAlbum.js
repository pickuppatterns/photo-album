import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import styles from '../css/PhotoAlbum.css';

function PhotoAlbum({ photos }) {
  return (
    <main className={styles.main}>
      <h2>Michael Elliott Photography</h2>
      <div className={styles.grid}>
        <Photos urls={photos} />
      </div>
    </main>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;