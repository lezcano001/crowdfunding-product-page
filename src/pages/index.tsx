import styles from '../styles/pages/Home.module.css';
import { Header } from '../components/Header';
import { ProjectAbout } from '../components/ProjectAbout';
import { ProjectStatistics } from '../components/ProjectStatistics';
import { ProjectView } from '../components/ProjectView';

import { BackProjectModal } from '../components/BackProjectModal';
import { BackProjectContext } from '../contexts/BackProjectContext';
import { useContext, useEffect, useState } from 'react';
import { ThanksModal } from '../components/ThanksModal';
import { MenuComponent } from '../components/MenuComponent';

import Head from 'next/head';
import { MenuProjectContext } from '../contexts/MenuProjectContext';


export default function Home() {

  const { isBackProjectModelOpen, isThanksModalOpen } = useContext(BackProjectContext);

  const { isMenuComponentActive, setIsMenuComponentActive } = useContext(MenuProjectContext);

  const [stylesOpenModal, setStylesOpenModal] = useState("");

  useEffect(() => {

    if (isBackProjectModelOpen !== false || isThanksModalOpen !== false || isMenuComponentActive !== false) {
      setStylesOpenModal(styles.containerAntiScroll);
    } else {
      setStylesOpenModal("");
    }

  }, [isBackProjectModelOpen, isThanksModalOpen, isMenuComponentActive])

  /*
    Para usar la variable document o window en NextJS para el SSR debemos usar el hook useEffect, ya que el hook useEffect se ejecuta del lado del browser y no del lado del servidor por lo tanto puede ver las variables document y window, así como otras que podemos necesitar usar.
  */
  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth > 700) {
        setIsMenuComponentActive(false);
      }
    });
  });

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

        {isMenuComponentActive && <>
          <MenuComponent />
        </>
        }

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
