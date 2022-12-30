import { Provider } from "react-redux";
import { store } from "/src/redux/store";
import "/src/shared/styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
