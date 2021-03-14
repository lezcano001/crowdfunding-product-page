import styles from '../styles/pages/Home.module.css';
import { Header } from '../components/Header';
import { ProjectAbout } from '../components/ProjectAbout';
import { ProjectStatistics } from '../components/ProjectStatistics';
import { ProjectView } from '../components/ProjectView';

import { BackProjectModal } from '../components/BackProjectModal';
import { BackProjectContext } from '../contexts/BackProjectContext';
import { useContext, useEffect, useState } from 'react';
import { ThanksModal } from '../components/ThanksModal';


export default function Home() {

  const { isBackProjectModelOpen, isThanksModalOpen } = useContext(BackProjectContext);

  const [stylesOpenModal, setStylesOpenModal] = useState("");

  useEffect(() => {

    if (isBackProjectModelOpen !== false || isThanksModalOpen !== false) {
      setStylesOpenModal(styles.containerAntiScroll);
    } else {
      setStylesOpenModal("");
    }

  }, [isBackProjectModelOpen, isThanksModalOpen])

  return (

    /* Este es super importante para dejar sin barra el body cuando abrimos el modal */

    <div className={stylesOpenModal}>
      <div className={styles.container}>
        <Header />
        <main>

          <ProjectView />

          <ProjectStatistics />

          <ProjectAbout />

          {isBackProjectModelOpen && <>
            <BackProjectModal />
          </>
          }

          {isThanksModalOpen && <>
            <ThanksModal />
          </>
          }

        </main>
      </div>
    </div>
  )
}
