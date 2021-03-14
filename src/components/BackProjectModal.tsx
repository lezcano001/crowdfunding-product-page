import { useContext, useState } from 'react';
import { BackProjectContext } from '../contexts/BackProjectContext';
import { PledgeComponent } from '../components/PledgeComponent';

import styles from '../styles/components/BackProjectModal.module.css';

export function BackProjectModal() {
    const { setIsBackProjectModelOpen, setOptionSelected, pledgeOptionsData } = useContext(BackProjectContext);

    /* ------ EXIT BUTTON CONFIGURATION ------ */
    function exitButtonHandler() {
        setIsBackProjectModelOpen(false);
        setOptionSelected("");
    }

    const pledgeOptions = pledgeOptionsData.map(function (pledgeOption) {
        return (
            <PledgeComponent
                index={pledgeOption.id}
            />

        )
    })

    return (

        <div className={styles.overlay}>
            <div>
                <div className={styles.container}>
                    <div>
                        <h2>About this project</h2>
                        <p>
                            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world.
                        </p>

                        {pledgeOptions}

                        <button onClick={exitButtonHandler}><img src="/icon-close-modal.svg" alt="Icon Close Modal" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}