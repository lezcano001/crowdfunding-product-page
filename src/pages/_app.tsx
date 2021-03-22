import { BackProjectProvider } from '../contexts/BackProjectContext';
import { MenuProjectProvider } from '../contexts/MenuProjectContext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MenuProjectProvider>
        <BackProjectProvider>
          <Component {...pageProps} />
        </BackProjectProvider>
      </MenuProjectProvider>
    </>
  )
}

export default MyApp
