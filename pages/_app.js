import Layout from '../components/common/Layout'
import '../styles/globals.css'
import Router from 'next/router'

// Added for Process Bar
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
