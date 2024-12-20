import styles from "./NoContactView.module.css";

import AddContactButton from "./AddContactButton";

const NoContactView = () => {
  return (
    <div className={styles.NCV}>
      <h3>{`<--- No Contacts Available --->`}</h3>
      <AddContactButton />
    </div>
  );
};

export default NoContactView;
