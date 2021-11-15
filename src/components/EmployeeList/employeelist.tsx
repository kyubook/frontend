import { FROM_SCRATCH_ICON } from "../constant";
import styles from "./EmployEe.module.scss";
const EmployeeList = () => {
  return (
    <div className={styles.container}>
      <h1>Employees</h1>
      <div className={styles.selectionCardOuterWrapper}>
        <div className={styles.selectionCardWrapper}>
          <p className={styles.cardTitle}>
            <span>Employee Name</span>
          </p>
          <div className={styles.cardDetailsSection}>
            <img
              className={styles.cardTypeImage}
              src={FROM_SCRATCH_ICON}
              alt=""
            />
            <p className={styles.cardTypeDetails}>Employee Salary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
