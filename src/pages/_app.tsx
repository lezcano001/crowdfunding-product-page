import { BackProjectProvider } from '../contexts/BackProjectContext';
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BackProjectProvider>
        <Component {...pageProps} />
      </BackProjectProvider>
    </>
  )
}

export default MyApp
