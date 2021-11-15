import { TEMPLATE_ICON } from "../constant";
import styles from "./country.module.scss";
const Country = () => {
  return (
    <div className={styles.container}>
      <h1>Countries</h1>
      <div className={styles.selectionCardOuterWrapper}>
        <div className={styles.selectionCardWrapper}>
          <p className={styles.cardTitle}>
            <span>Country Name</span>
          </p>
          <div className={styles.cardDetailsSection}>
            <img className={styles.cardTypeImage} src={TEMPLATE_ICON} alt="" />
            <p className={styles.cardTypeDetails}>Country Code</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
