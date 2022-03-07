import styles from "./Banner.module.css";

// low level component
// also known presentational component
export default function Banner() {
  return (
    <div className={styles.container}>
      <h1>GET YOUR LATEST WEATHER NEWS HERE!</h1>
    </div>
  );
}
