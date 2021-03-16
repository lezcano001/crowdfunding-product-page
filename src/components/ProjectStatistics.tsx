import styles from '../styles/components/ProjectStatistics.module.css';

import { useContext, useEffect, useState } from 'react';
import { BackProjectContext } from '../contexts/BackProjectContext';

export function ProjectStatistics() {

    const { moneyRaised, totalBackers } = useContext(BackProjectContext);

    const [moneyRaisedState, setMoneyRaisedState] = useState("0");

    const [progressBarState, setProgressBarState] = useState((moneyRaised * 100) / 100000);

    useEffect(() => {
        setProgressBarState((moneyRaised * 100) / 100000);

        if (String(moneyRaised).length > 3) {

            let test = String(moneyRaised).split('');

            for (let i = String(moneyRaised).length - 3; i > 0; i = i - 3) {
                test.splice(i, 0, ",");

                setMoneyRaisedState(test.join(""));
                console.log(i)
            }

            // setMoneyRaisedState("Supero 3");


        } else {
            setMoneyRaisedState(String(moneyRaised));
        }



    }, [moneyRaised]);

    return (
        <section className={styles.projectStatisticsContainer}>
            <div>
                <div>
                    <div>

                        <p>
                            <span>
                                &#36;{moneyRaisedState}
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
                    <div style={{ width: `${progressBarState < 100 ? progressBarState : 100}%` }}></div>
                </div>

            </div>
        </section>
    );
}