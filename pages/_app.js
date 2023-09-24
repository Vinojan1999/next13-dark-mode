import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import ThemeToggle from '@/components/theme.util'

export default function App({ Component, pageProps }) {
  return (
    <div className={styles.page}>
      <ThemeToggle />
      <Component {...pageProps} />
    </div>
  )
}
