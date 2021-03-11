import { useContext } from 'react';
import { BackProjectContext } from '../contexts/BackProjectContext';
import styles from '../styles/components/ProjectView.module.css';

export function ProjectView() {

    const { setIsBackProjectModelOpen } = useContext(BackProjectContext);

    function openModalHandler() {
        setIsBackProjectModelOpen(true);
    }

    return (
        <section className={styles.proyectViewContainer}>
            <img src="logo-mastercraft.svg" alt="Logo MasterCraft" />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.</p>
            <div>
                <button type="button" onClick={openModalHandler}>Back this project</button>
                <button type="button"><img src="icon-bookmark.svg" alt="bookmark icon" /><span>Bookmark</span></button>
            </div>
        </section>
    );
}