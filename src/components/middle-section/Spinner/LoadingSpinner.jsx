import styles from "./LoadingSpinner.module.css"

const LoadingSpinner = () => {
  return (
    <div className={styles.LoadingSpinner}>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
