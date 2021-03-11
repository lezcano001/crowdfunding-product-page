import styles from '../styles/components/ProjectAbout.module.css';

export function ProjectAbout() {

    return (
        <section className={styles.sectionAbout}>
            <div>
                <h2>About this project</h2>
                <p>
                    The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                </p>
                <p>
                    Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                </p>
                <article>
                    <header>
                        <strong>Bamboo Stand</strong>
                        <p>Plegde &#36;25 or more</p>
                    </header>
                    <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promocional campaign, and you'll be added to a special Backer member list.</p>
                    <footer>
                        <p>
                            <span>101</span> left
                        </p>

                        <button type="button">
                            Select Reward
                        </button>
                    </footer>
                </article>


                <article>
                    <header>
                        <strong>Black Edition Stand</strong>
                        <p>Plegde &#36;75 or more</p>
                    </header>
                    <p>You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.</p>
                    <footer>
                        <p>
                            <span>64</span> left
                        </p>

                        <button type="button">
                            Select Reward
                        </button>
                    </footer>
                </article>



                <article className={styles.disabled}>
                    <header>
                        <strong>Mahogany Special Edition</strong>
                        <p>Plegde &#36;200 or more</p>
                    </header>
                    <p>
                        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.
                    </p>
                    <footer>
                        <p>
                            <span>0</span> left
                        </p>

                        <button type="button" disabled>
                            Out of stock
                        </button>
                    </footer>
                </article>

            </div>
        </section>
    );
}