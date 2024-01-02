import React from "react";
import styles from "./Watch.module.css";

export const Watch = () => {
  return (
    <div className={styles.watch}>
      <span className={styles.title}>Watch</span>
      <iframe
        src="https://www.youtube.com/embed/FlClaT2ctx8"
        title="YouTube Video"
        className={styles.video}
      ></iframe>
    </div>
  );
};
