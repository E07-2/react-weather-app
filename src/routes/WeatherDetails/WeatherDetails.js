import Temperature from "../../components/shared/Temperature/Temperature";

import styles from "./WeatherDetails.module.css";

export default function WeatherDetails() {
  return (
    <ul className={styles.container}>
      <li>
        <p className={styles.day}>Tuesday</p>
        <Temperature value={10} />
      </li>
      <li>
        <p className={styles.day}>Wednesday</p>
        <Temperature value={12} />
      </li>
      <li>
        <p className={styles.day}>Thursday</p>
        <Temperature value={23} />
      </li>
      <li>
        <p className={styles.day}>Friday</p>
        <Temperature value={25} />
      </li>
    </ul>
  );
}
