import React from 'react';
import styles from "../../Button.module.scss";

export default ({ onClick }) => (
  <button onClick={onClick} className={`${styles.btn} + ${styles.deleteBtn}`}>
    Delete
  </button>
);  
