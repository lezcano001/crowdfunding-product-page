import styles from '../styles/components/Header.module.css';

export function Header() {

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
                </div>

            </div>
        </header>
    );
}