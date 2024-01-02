import React from "react";
import styles from "./Memories.module.css";

export const Memories = () => {
  return (
    <div className={styles.memories}>
      <span className={styles.title}>Memories</span>
      <div className={styles.images}>
        <span>Band</span>
      </div>
      <div className={styles.images}>
        <span>Members</span>
      </div>
    </div>
  );
};
