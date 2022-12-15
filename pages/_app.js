import Script from 'next/script'
import { Provider } from "react-redux"
import { store } from '/redux/store'
import '/shared/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* FontAwesome Icons */}
            < Script src="https://kit.fontawesome.com/d704cf03f8.js" crossorigin="anonymous" />
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}