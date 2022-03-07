import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

import Banner from "./Banner";

import styles from "./Homepage.module.css";

export default function Homepage() {
  // Part 3 - Consuming the context
  const { username } = useContext(LoginContext);

  return (
    <div className={styles.container}>
      <h1>Weather app</h1>
      <p>Welcome back, {username}</p>
      <Banner />
    </div>
  );
}
