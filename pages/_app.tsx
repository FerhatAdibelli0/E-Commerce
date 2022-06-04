import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../redux/index";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { Hydrate } from "react-query/hydration";

// const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}> */}
          <Fragment>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Fragment>
        {/* </Hydrate>
      </QueryClientProvider> */}
    </Provider>
  );
}

export default MyApp;
