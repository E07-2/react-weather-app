import styles from "./Temperature.module.css";

export default function Temperature({ value }) {
  const getStyleFromTemperature = (temperature) => {
    if (temperature > 30) {
      return styles.hot;
    }

    if (temperature < 10) {
      return styles.cold;
    }

    return styles.warm;
  };

  return (
    <p className={getStyleFromTemperature(value)}>
      Temperature: {value} degrees C
    </p>
  );
}
