import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

const Home = ({label}) => (
  <div className={styles.Home}>
    Home Page {label}
  </div>
);

Home.propTypes = {
  label: PropTypes.string
};

Home.defaultProps = {
  label: ''
};

export default Home;
