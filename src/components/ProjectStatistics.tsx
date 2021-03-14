import styles from '../styles/components/ProjectStatistics.module.css';

import { useContext, useEffect, useState } from 'react';
import { BackProjectContext } from '../contexts/BackProjectContext';

export function ProjectStatistics() {

    const { moneyRaised, totalBackers } = useContext(BackProjectContext);

    const [progressBarState, setProgressBarState] = useState((moneyRaised * 100) / 100000);

    useEffect(() => {
        setProgressBarState((moneyRaised * 100) / 100000);

    }, [moneyRaised]);

    return (
        <section className={styles.projectStatisticsContainer}>
            <div>
                <div>
                    <div>

                        <p>
                            <span>
                                &#36;{moneyRaised}
                            </span>
                            <br />
                            of $100,000 backed
                        </p>

                        <p>
                            <span>
                                {totalBackers}
                            </span>
                            <br />
                            total backers
                        </p>

                        <p>
                            <span>
                                56
                            </span>
                            <br />
                            days left
                        </p>

                    </div>
                </div>
                <div className={styles.progressBar}>
                    <div style={{ width: `${progressBarState}%` }}></div>
                </div>

            </div>
        </section>
    );
}