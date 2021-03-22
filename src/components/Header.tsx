import { useContext } from 'react';
import { MenuProjectContext } from '../contexts/MenuProjectContext';
import styles from '../styles/components/Header.module.css';

export function Header() {
    const { isMenuComponentActive, setIsMenuComponentActive } = useContext(MenuProjectContext);

    function hamburgerMenuHandler() {
        if (isMenuComponentActive === false) {
            setIsMenuComponentActive(true);
        } else {
            setIsMenuComponentActive(false);
        }
    }

    return (
        <header className={styles.headerContainer}>
            <div>
                <a href="/">
                    <img src="logo.svg" alt="Logotipo" />
                </a>

                <div>
                    <a href="/">About</a>
                    <a href="/">Discover</a>
                    <a href="/">Get Started</a>
                    {!isMenuComponentActive && <>
                        <img onClick={hamburgerMenuHandler} src="/icon-hamburger.svg" alt="Hamburger Icon" />
                    </>
                    }
                </div>

            </div>
        </header>
    );
}