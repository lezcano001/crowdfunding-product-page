import { useContext, useState } from 'react';
import { BackProjectContext } from '../contexts/BackProjectContext';
import styles from '../styles/components/ThanksModal.module.css';

export function ThanksModal() {

    const { setIsThanksModalOpen } = useContext(BackProjectContext);

    function gotItButtonHandler() {
        setIsThanksModalOpen(false);
    }

    return (
        <div className={styles.overlay}>
            <div>
                <div className={styles.container}>
                    <div>
                        <img src="/icon-check.svg" alt="Icon Check" />
                        <h2>Thanks for your support!</h2>

                        <p>Your pledge bring us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed</p>

                        <button onClick={gotItButtonHandler}>Got it!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}