import { useContext } from 'react';
import { MenuProjectContext } from '../contexts/MenuProjectContext';
import styles from '../styles/components/MenuComponent.module.css';

export function MenuComponent() {

    const { setIsMenuComponentActive } = useContext(MenuProjectContext);

    function exitButtonHandler() {
        setIsMenuComponentActive(false);
    }

    return (
        <div className={styles.overlay}>
            <div>
                <nav className={styles.container}>
                    <ul>
                        <a href="">
                            <li>
                                About
                            </li>
                        </a>
                        <a href="">
                            <li>
                                Discover
                            </li>
                        </a>
                        <a href="">
                            <li>
                                Get Started
                            </li>
                        </a>
                    </ul>

                    <button onClick={exitButtonHandler}><img src="/icon-close-menu.svg" alt="Icon Close Modal" /></button>
                </nav>
            </div>
        </div>
    );
}