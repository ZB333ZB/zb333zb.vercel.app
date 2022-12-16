import Script from 'next/script'
import { Provider } from "react-redux"
import { store } from '/redux/store'
import '/shared/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}