"use client";

import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { ThemeToggle } from "./ThemeToggle";
import * as styles from "./NavBar.css";

export function NavBar() {
  const { user, isLoading, logout } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>&gt;_</span>
          LinkOps
        </Link>
        <div className={styles.navRight}>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Shorten
            </Link>
            <Link href="/analytics" className={styles.navLink}>
              Dashboard
            </Link>
            {user && (
              <Link href="/settings" className={styles.navLink}>
                Settings
              </Link>
            )}
          </div>
          <div className={styles.navActions}>
            <ThemeToggle />
            {!isLoading &&
              (user ? (
                <div className={styles.userArea}>
                  <div className={styles.avatar}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <button
                    className={styles.logoutBtn}
                    onClick={logout}
                    type="button"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <Link href="/login" className={styles.loginBtn}>
                  Log in
                </Link>
              ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
