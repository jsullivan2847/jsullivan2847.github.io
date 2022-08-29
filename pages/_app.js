import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
