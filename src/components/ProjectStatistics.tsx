import styles from '../styles/components/ProjectStatistics.module.css';

export function ProjectStatistics() {
    return (
        <section className={styles.projectStatisticsContainer}>
            <div>
                <div>
                    <div>

                        <p>
                            <span>
                                &#36;89,914
                            </span>
                            <br />
                            of $100,000 backed
                        </p>

                        <p>
                            <span>
                                5,007
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
                    <div style={{ width: '89.914%' }}></div>
                </div>

            </div>
        </section>
    );
}