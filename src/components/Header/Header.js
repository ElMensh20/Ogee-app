import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';



const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className={styles.Header}>
      Header Component
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
