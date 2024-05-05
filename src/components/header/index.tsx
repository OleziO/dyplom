import React from "react";
import cn from "classnames";
import { toPicture } from "../../helpers/pictures";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <img src={toPicture("")} alt="" />
      <nav>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/smartphones">Phones</a>
          </li>
          <li>
            <a href="/laptops">Laptops</a>
          </li>
          <li>
            <a href="/accessories">Accessories</a>
          </li>
          <li>
            <div className={styles.user}>
              <img src={`.${toPicture("user")}`} alt="user" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
