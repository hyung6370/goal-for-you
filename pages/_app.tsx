import '@/styles/globals.css'
import '@/styles/_style.scss';
import '@/styles/_common.scss';
import '@/styles/_theme.scss';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
