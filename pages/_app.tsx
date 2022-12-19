import type { AppProps } from 'next/app'
//@Libs
import {amplifyConfig} from "../src/libs/amplify";
//@Styles
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  amplifyConfig()

  return <Component {...pageProps} />
}
