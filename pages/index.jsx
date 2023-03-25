import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
    <h1 className={styles.title}>
     Homepage
    </h1>
    <p className={styles.text}>Next.js 13 was recently released, learn more and see the upgrade guide. Version 13 also introduces beta features like the app directory that works alongside the pages directory (stable) for incremental adoption. You can continue using pages in Next.js 13, but if you want to try the new app features, see the new beta docs.</p><br/>
    <p className={styles.text}>Next.js 13 was recently released, learn more and see the upgrade guide. Version 13 also introduces beta features like the app directory that works alongside the pages directory (stable) for incremental adoption. You can continue using pages in Next.js 13, but if you want to try the new app features, see the new beta docs.</p><br/>
    <Link href='/ninjas' className={styles.btn}>
      See Ninja Listening
    </Link>
    </div>
    </>
  )
}
