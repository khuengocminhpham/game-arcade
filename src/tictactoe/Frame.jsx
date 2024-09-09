import React from "react";
import styles from "./Frame.module.css";
const Frame = ({ onClick, value }) => {
  return (
    <div onClick={onClick} className={styles.block}>
      {value}
    </div>
  );
};

export default Frame;
