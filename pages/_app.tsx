import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../redux/index";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
          <Fragment>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Fragment>
    </Provider>
  );
}

export default MyApp;
