import styles from '../styles/components/PledgeComponent.module.css';
import { useState, useContext, useEffect } from 'react';
import { BackProjectContext } from '../contexts/BackProjectContext';

interface PledgeWithRewardOptionComponentProps {
    index: number;
}

export function PledgeComponent({ ...rest }: PledgeWithRewardOptionComponentProps) {

    const { index } = rest;

    const { setOptionSelected,
        optionSelected,
        pledgeOptionsData,
        setIsThanksModalOpen,
        setIsBackProjectModelOpen,
        setMoneyRaised,
        moneyRaised,
        totalBackers,
        setTotalBackers
    } = useContext(BackProjectContext);

    /* LOS DATOS DEL ARTICULO EN EL ESTADO */
    const [pledgeData, setPledgeData] = useState(pledgeOptionsData[index]);

    /* LOS ESTILOS QUE SE VAN A APLICAR EN LOS ARTICULOS */
    const [stylesPledge, setStylesPledge] = useState(styles.optionContainer);

    /* LOS DATOS DEL INPUT DEL VALOR DE LA COLABORACIÓN */
    const [pledgeValue, setPledgeValue] = useState("");



    useEffect(() => {
        if (optionSelected === pledgeData.optionValue) {
            setStylesPledge(`${styles.optionContainer} ${styles.optionSelected}`);
        }

        if (optionSelected !== pledgeData.optionValue) {
            setStylesPledge(`${styles.optionContainer}`);
            setPledgeValue("");
        }

    }, [optionSelected]);

    function radioButtonActive(event) {
        setOptionSelected(event.target.value);
        setPledgeValue(pledgeData.subtitle);
    }

    function handlePledge(event) {

        let inputValueString = event.target.value;

        let inputValueArray = inputValueString.split("");

        for (let i = 0; i < inputValueArray.length; i++) {

            if (inputValueArray[i] === ',') {
                inputValueArray.splice(i, 1);
            }

        }

        inputValueString = inputValueArray.join("");

        if (inputValueString.length > 3) {

            let test = inputValueString.split('');

            for (let i = inputValueString.length - 3; i > 0; i = i - 3) {
                test.splice(i, 0, ",");

                setPledgeValue(test.join(""));
                console.log(i)
            }
        } else {
            setPledgeValue(inputValueString);
        }

    }

    function enterPledge(event) {
        event.preventDefault();

        let inputValueString = pledgeValue;

        let inputValueArray = inputValueString.split("");

        for (let i = 0; i < inputValueArray.length; i++) {

            if (inputValueArray[i] === ',') {
                inputValueArray.splice(i, 1);
            }

        }

        inputValueString = inputValueArray.join("");

        let pledgeData2 = pledgeData;

        if (pledgeData2.productsLeft !== "Nothing") {
            pledgeData2.productsLeft = String(Number(pledgeData.productsLeft) - 1);
            setPledgeData(pledgeData2);
        }

        setTotalBackers(totalBackers + 1);
        setMoneyRaised(moneyRaised + Number(/*pledgeValue*/inputValueString));
        setIsBackProjectModelOpen(false);
        setIsThanksModalOpen(true);
        setOptionSelected("");

    }


    return (
        <>
            {pledgeData.productsLeft === "Nothing" || Number(pledgeData.productsLeft) > 0 ? (<>
                <label className={stylesPledge}>

                    <article className={styles.articleContainer}>

                        <div onChange={radioButtonActive} className={styles.articleContent}>

                            <span className={styles.radioInput}>
                                <input type="radio" id={pledgeData.optionValue} name="pledge" value={pledgeData.optionValue} />
                                <span className={styles.radioControl}></span>
                            </span>

                            <div>
                                <strong>{pledgeData.title}</strong>
                                {pledgeData.subtitle !== "" && <>
                                    <span className={styles.pledgeSubtitle}>Pledge &#36;{pledgeData.subtitle} or more</span>
                                </>
                                }
                            </div>

                            {pledgeData.productsLeft !== "Nothing" && <>
                                <p>
                                    <span>{pledgeData.productsLeft}</span>
                                    left
                                </p>
                            </>
                            }

                            <p className={styles.pledgeDescription}>
                                {pledgeData.description}
                            </p>

                        </div>

                        {optionSelected === pledgeData.optionValue && <>
                            <footer>
                                <p>
                                    Enter you plegde
                                </p>
                                <form onSubmit={enterPledge}>
                                    <div className={styles.inputWrapper}>
                                        <span>$</span>
                                        <input id="pledge" type="text" value={pledgeValue} onChange={handlePledge} />
                                    </div>
                                    <button type="submit">Continue</button>
                                </form>
                            </footer>
                        </>
                        }
                    </article>

                </label>
            </>
            ) : (<>
                <label className={stylesPledge}>

                    <article className={`${styles.articleContainer} ${styles.disabled}`}>

                        <div onChange={radioButtonActive} className={styles.articleContent}>

                            <span className={styles.radioInput}>
                                <input type="radio" id={pledgeData.optionValue} name="pledge" value={pledgeData.optionValue} disabled />
                                <span className={styles.radioControl}></span>
                            </span>

                            <div>
                                <strong>{pledgeData.title}</strong>
                                {pledgeData.subtitle !== "" && <>
                                    <span>Pledge &#36;{pledgeData.subtitle} or more</span>
                                </>
                                }
                            </div>

                            {pledgeData.productsLeft !== "" && <>
                                <p>
                                    <span>{pledgeData.productsLeft}</span>
                                    left
                                </p>
                            </>
                            }

                            <p className={styles.pledgeDescription}>
                                {pledgeData.description}
                            </p>

                        </div>

                    </article>

                </label>

            </>
            )
            }
        </>
    );
}