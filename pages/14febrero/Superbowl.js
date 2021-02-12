import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
              <title>Cosi Cosi</title>
              <link rel="icon" href="/logo.png" />

      </Head>

          <main className={styles.main}>
              <h1 className={styles.title}>
                  Bienvenido
        </h1>
              <p>  </p>
              
              <Image src="/superbowl/1.png" alt="Cosi" width={400} height={200} />
              <p>  </p>
              <Image src="/superbowl/2.png" alt="Cosi" width={400} height={200} />
              <p>  </p>
              <a href="/" className={styles.card}>
                  <h3>Ir a otro lugar</h3>
                 
              </a>

       
          </main>

         

      <footer className={styles.footer}>
        
          Cosi Cosi{' '}
          <img src="/logo.png" alt="CarlosNBAle Logo" className={styles.logo} />
        
      </footer>
    </div>
  )
}
