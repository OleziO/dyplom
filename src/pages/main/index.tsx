import React from "react";
import { MainTable } from "../MainTable";
import styles from "./styles.module.scss";

export const MainApp = () => {
  return (
    <main className={styles.pageContainer}>
      <MainTable />
    </main>
  );
};
