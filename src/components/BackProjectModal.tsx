import { useContext, useState } from 'react';
import { BackProjectContext } from '../contexts/BackProjectContext';

import styles from '../styles/components/BackProjectModal.module.css';

export function BackProjectModal() {
    const { setIsBackProjectModelOpen, setOptionSelected, optionSelected } = useContext(BackProjectContext);

    // Input Pledges values
    const [pledgeWithNoRewardValue, setPledgeWithNoRewardValue] = useState(0);
    const [pledgeWithBambooStandRewardValue, setPledgeWithBambooStandRewardValue] = useState(0);
    const [pledgeWithBlackEditionStandRewardValue, setPledgeWithBlackEditionStandRewardValue] = useState(0);

    // Pledges Option Actives
    const [isPledgeWithNoRewardOptionActive, setIsPledgeWithNoRewardOptionActive] = useState(false);
    const [isBambooStandOptionActive, setIsBambooStandOptionActive] = useState(false);
    const [isBlackEditionStandOptionActive, setIsBlackEditionStandOptionActive] = useState(false);


    /* ------ EXIT BUTTON CONFIGURATION ------ */
    function exitButtonHandler() {
        setIsBackProjectModelOpen(false);
    }

    /* ------ HANDLE INPUT PLEDGES ------ */
    function handlePledgeWithNoReward(event) {
        setPledgeWithNoRewardValue(event.target.value);
    }

    function handlePledgeWithBambooStandReward(event) {
        setPledgeWithBambooStandRewardValue(event.target.value);
    }

    function handlePledgeWithBlackEditionStandReward(event) {
        setPledgeWithBlackEditionStandRewardValue(event.target.value);
    }


    /* ------ FORM SUBMIT BUTTONS ACTIONS ------ */

    function enterPledgeWithNoReward(event) {
        event.preventDefault();
        alert(pledgeWithNoRewardValue / 1);
    }

    function enterPledgeWithBambooStandReward(event) {
        event.preventDefault();
        alert(pledgeWithBambooStandRewardValue / 1);
    }

    function enterPledgeWithBlackEditionStandReward(event) {
        event.preventDefault();
        alert(pledgeWithBlackEditionStandRewardValue / 1);
    }



    function radioButtonActive(event) {
        // alert(event.target.value);
        if (event.target.value === "pledgeWithNoReward") {
            setIsPledgeWithNoRewardOptionActive(true)
            setIsBambooStandOptionActive(false)
            setIsBlackEditionStandOptionActive(false)
        }

        if (event.target.value === "bambooStand") {
            setIsBambooStandOptionActive(true)
            setIsPledgeWithNoRewardOptionActive(false)
            setIsBlackEditionStandOptionActive(false)
        }

        if (event.target.value === "blackEditionStand") {
            setIsBlackEditionStandOptionActive(true)
            setIsPledgeWithNoRewardOptionActive(false)
            setIsBambooStandOptionActive(false)
        }

        // setOptionSelected(event.target.value);
    }


    return (

        <div className={styles.overlay}>
            <div>
                <div className={styles.container}>
                    <div>
                        <h2>About this project</h2>
                        <p>
                            Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world.
                        </p>


                        {/* <label className={styles.radio}> */}
                        <label>
                            <article>
                                <div onChange={radioButtonActive}>
                                    <span className={styles.radioInput}>
                                        <input type="radio" id="pledgeWithNoReward" name="pledge" value="pledgeWithNoReward" />
                                        <span className={styles.radioControl}></span>
                                    </span>
                                    <div>
                                        <strong>Pledge with no reward</strong>
                                        <p>
                                            Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                                        </p>
                                    </div>
                                </div>
                                {isPledgeWithNoRewardOptionActive && <>
                                    <footer>
                                        <p>
                                            Enter you plegde
                                            </p>
                                        <form onSubmit={enterPledgeWithNoReward}>
                                            <input id="pledge" type="text" value={pledgeWithNoRewardValue} onChange={handlePledgeWithNoReward} />
                                            <button type="submit">Continue</button>
                                        </form>
                                    </footer>
                                </>
                                }
                            </article>

                        </label>


                        <label>
                            <article>
                                <div onChange={radioButtonActive}>
                                    <span className={styles.radioInput}>
                                        <input type="radio" id="bambooStand" name="pledge" value="bambooStand" />
                                        <span className={styles.radioControl}></span>
                                    </span>
                                    <div>
                                        <div>
                                            <div>
                                                <strong>Bamboo Stand</strong>
                                                <span>Pledge &#36;25 or more</span>
                                            </div>
                                            <p>
                                                <span>101</span>
                                            left
                                        </p>
                                        </div>
                                        <p>
                                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.
                                    </p>
                                    </div>
                                </div>
                                {isBambooStandOptionActive && <>
                                    <footer>
                                        <p>
                                            Enter you plegde
                                            </p>
                                        <form onSubmit={enterPledgeWithBambooStandReward}>
                                            <input id="pledge" type="text" value={pledgeWithBambooStandRewardValue} onChange={handlePledgeWithBambooStandReward} />
                                            <button type="submit">Continue</button>
                                        </form>
                                    </footer>
                                </>
                                }
                            </article>
                        </label>


                        <label>
                            <article onChange={radioButtonActive}>
                                <div>
                                    <span className={styles.radioInput}>
                                        <input type="radio" id="blackEditionStand" name="pledge" value="blackEditionStand" />
                                        <span className={styles.radioControl}></span>
                                    </span>
                                    <div>
                                        <div>
                                            <div>
                                                <strong>Black Edition Stand</strong>
                                                <span>Pledge &#36;75 or more</span>
                                            </div>
                                            <p>
                                                <span>64</span>
                                            left
                                        </p>
                                        </div>
                                        <p>
                                            You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                                    </p>
                                    </div>
                                </div>
                                {isBlackEditionStandOptionActive && <>
                                    <footer>
                                        <p>
                                            Enter you plegde
                                            </p>
                                        <form onSubmit={enterPledgeWithBlackEditionStandReward}>
                                            <input id="pledge" type="text" value={pledgeWithBlackEditionStandRewardValue} onChange={enterPledgeWithBlackEditionStandReward} />
                                            <button type="submit">Continue</button>
                                        </form>
                                    </footer>
                                </>
                                }
                            </article>
                        </label>

                        <label>
                            <article className={styles.disabled}>
                                <div>
                                    <span className={styles.radioInput}>
                                        <input type="radio" id="mahoganySpecialEdition" name="pledge" value="mahoganySpecialEdition" disabled />
                                        <span className={styles.radioControl}></span>
                                    </span>
                                    <div>
                                        <div>
                                            <div>
                                                <strong>Mahogany Special Edition</strong>
                                                <span>Pledge &#36;200 or more</span>
                                            </div>
                                            <p>
                                                <span>0</span>
                                            left
                                        </p>
                                        </div>
                                        <p>
                                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                                    </p>
                                    </div>
                                </div>
                            </article>
                        </label>

                        <button onClick={exitButtonHandler}><img src="/icon-close-modal.svg" alt="Icon Close Modal" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}