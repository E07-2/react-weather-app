import { useEffect, useState } from "react";

import Banner from "./Banner";

import styles from "./Homepage.module.css";

export default function Homepage() {
  const [style, setStyle] = useState(styles.container);

  useEffect(() => {
    setTimeout(() => {
      setStyle(styles.container2);
    }, 2000);
  }, []);

  return (
    <div className={style}>
      <h1>Weather app</h1>
      <Banner />
    </div>
  );
}
