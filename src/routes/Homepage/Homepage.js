import { useState } from "react";

import Banner from "./Banner";

import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <h1>Weather app</h1>
      <Banner />
    </div>
  );
}
