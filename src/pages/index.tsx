import styles from '../styles/pages/Home.module.css';
import { Header } from '../components/Header';
import { ProjectAbout } from '../components/ProjectAbout';
import { ProjectStatistics } from '../components/ProjectStatistics';
import { ProjectView } from '../components/ProjectView';

import { BackProjectModal } from '../components/BackProjectModal';
import { BackProjectContext } from '../contexts/BackProjectContext';
import { useContext, useEffect, useState } from 'react';
import { ThanksModal } from '../components/ThanksModal';

import Head from 'next/head';


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
      <Head>

        {/* Primary Meta Tags */}
        <title>Mastercraft Bamboo Monitor Riser</title>
        <meta name="title" content="Mastercraft Bamboo Monitor Riser" />
        <meta name="description" content="A beautiful & handcrafted monitor stand to reduce neck and eye strain." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crowdfunding-product-page-nine.vercel.app/" />
        <meta property="og:title" content="Mastercraft Bamboo Monitor Riser" />
        <meta property="og:description" content="A beautiful & handcrafted monitor stand to reduce neck and eye strain." />

        {/* La imagen no funciona ahora mañana hay que arreglar */}
        <meta property="og:image" content="/logo.mastercraft.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://crowdfunding-product-page-nine.vercel.app/" />
        <meta property="twitter:title" content="Mastercraft Bamboo Monitor Riser" />
        <meta property="twitter:description" content="A beautiful & handcrafted monitor stand to reduce neck and eye strain." />

        {/* La imagen no funciona ahora mañana hay que arreglar */}
        <meta property="twitter:image" content="/logo.mastercraft.png"></meta>

      </Head>
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
