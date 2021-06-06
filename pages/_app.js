import Layout from "../components/Layout"
import '../styles/globals.css'
import App from 'next/app'

function MyApp({ Component, pageProps }) {

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp