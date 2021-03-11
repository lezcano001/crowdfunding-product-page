import styles from '../styles/pages/Home.module.css';
import { Header } from '../components/Header';
import { ProjectAbout } from '../components/ProjectAbout';
import { ProjectStatistics } from '../components/ProjectStatistics';
import { ProjectView } from '../components/ProjectView';

import { BackProjectModal } from '../components/BackProjectModal';
import { BackProjectContext } from '../contexts/BackProjectContext';
import { useContext } from 'react';


export default function Home() {

  const { isBackProjectModelOpen } = useContext(BackProjectContext);

  return (
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

      </main>
    </div>
  )
}
