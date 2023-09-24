import Head from 'next/head'

import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next 13 Dark Mode App</title>
        <meta name="description" content="Next 13 Dark Mode App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link
            href="https://nextjs.org/docs" 
            target='_blank'
            className={styles.card}
          >
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Link>

          <Link
            href="https://nextjs.org/learn" 
            className={styles.card}
            target='_blank'
          >
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/master/examples" 
            className={styles.card}
            target='_blank'
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>

          <Link
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" 
            className={styles.card}
            target='_blank'
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
