import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      {/* wrap the app with Page component instead wrapping every page with it, the Component compennt and spreading pageProps are equal to {children} */}
      <Component {...pageProps} />
    </Page>
  );
}
