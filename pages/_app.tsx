import { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  // Se crean providers
  // Se crean layouts
  // Se crean props adicionales
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
