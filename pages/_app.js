import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
       <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap" rel="stylesheet"></link>
    </Layout>
    </>
  )
}
export default MyApp
