import React, { BaseSyntheticEvent, useState } from "react";
import cn from "classnames";
import { supabase } from "../../api";
import styles from "./styles.module.scss";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";

export const SignIn = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const login = async () => {};

  return (
    <Modal>
      <h1 className={styles.headerText}>Sign In</h1>
      <label className={styles.signInLabel}>
        <input
          type="text"
          className={cn("form-control", styles.usernameInput)}
          placeholder="username"
          value={user.username}
          onInput={(e: BaseSyntheticEvent) =>
            setUser({ ...user, username: e.target.value })
          }
        />
      </label>
      <label className={styles.signInLabel}>
        <input
          type="password"
          className={cn("form-control", styles.passwordInput)}
          placeholder="password"
          value={user.password}
          onInput={(e: BaseSyntheticEvent) =>
            setUser({ ...user, password: e.target.value })
          }
        />
      </label>
      <Button type="button" onClick={login}>
        LOGIN
      </Button>
    </Modal>
  );
};
