import React from "react";
import styles from "./Background.module.css";

export const Background = () => {
  return (
    <div className={styles.background}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
