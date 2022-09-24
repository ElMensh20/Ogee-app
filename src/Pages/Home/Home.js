import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import { useTranslation } from "react-i18next";
import "../../Translation/i18n";


const Home = ({ label }) => {

  const { t } = useTranslation();
 return (<div className={styles.Home}>
   { t("welcome")}  {label}
  </div>
  );
}
Home.propTypes = {
  label: PropTypes.string.isRequired

};

Home.defaultProps = {
  label: ''
};

export default Home;



