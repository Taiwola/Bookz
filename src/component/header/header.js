import { MenuIcon, X } from "lucide-react";
import styles from "./page.module.css";
import { useState } from "react";

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/" className={styles.header_logo}>B<span className={styles.span}>oo</span>kz</a>
            </div>
            <div className={styles.header_toggle}>
                <button onClick={toggleMenu}>
                    {isMenuVisible ? <X /> : <MenuIcon />}
                </button>
            </div>
            <nav className={`${styles.nav} ${isMenuVisible ? styles.show : null}`}>
                <div className={`${styles.nav_content} ${styles.bd_grid}`}>
                    <div className={styles.nav_menu}>
                        <ul className={styles.nav_list}>
                            <li className={styles.nav_item}><a href="/" className={styles.nav_name}>Home</a></li>
                            <li className={styles.nav_item}><a href="/about-us" className={styles.nav_link}>About us</a></li>
                            <li className={styles.nav_item}><a href="/get-started" className={styles.nav_btn}>Get start</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
