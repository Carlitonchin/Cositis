import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Image from 'next/image'
export default function Home() {
  return (
    <div className={styles.container} bgcolor="red">
      <Head>
        <title>Cosi Cosi</title>
        <link rel="icon" href="/logo.png" />
      </Head>

          <main className={styles.main}>
        <h1 className={styles.title}>
          Felicidades titi !!!!!!
        </h1>

        <p className={styles.description}>
          Todo en tiempos de pandemia es online, y el 14 de febrero no pod&iacute;a ser la excepci&oacute;n
        </p>
              <p className={styles.description}>
                  Te quiero invitar a alg&uacute;n lugar, escoge
        </p>
        <div className={styles.grid}>
          <a href="/14febrero/Gelato" className={styles.card}>
            <h3>Gelato &rarr;</h3>
                      <p>Disfruta de los helados m&aacute;s cremosos de Cuba</p>
          </a>

          <a href="/14febrero/Parque-de-las-palomas" className={styles.card}>
            <h3>Parque de las palomas &rarr;</h3>
            <p>T&uacute; no comes, pero las palomas s&iacute;, y les tiras fotos</p>
                  </a>
                  <a href="/14febrero/Chanchullero" className={styles.card}>
                      <h3>Chanchullero &rarr;</h3>
                      <p>Rica comida cubana, y no cubana tambi&eacute;n</p>
                  </a>

                  <a href="/14febrero/Colon" className={styles.card}>
                      <h3>Col&oacute;n &rarr;</h3>
                      <p>Ll&eacute;gate a la Atenas de Cuba y disfruta de un rico puerco asado</p>
                  </a>

                  <a href="/14febrero/Finca-de-los-monos" className={styles.card}>
                      <h3>Finca de los monos &rarr;</h3>
                      <p>T&uacute; no comes, y los monos tampoco, pero tiras fotos</p>
                  </a>

                  <a href="/14febrero/En-Guayabera" className={styles.card}>
                      <h3>En Guayabera &rarr;</h3>
                      <p>No comes, pero tomas y bailas, no tienes que ir en guayabera</p>
                  </a>

                  <a href="/14febrero/Pinar-del-Rio" className={styles.card}>
                      <h3>Pinar del R&iacute;o &rarr;</h3>
                      <p>Polo tur&iacute;stico, el m&aacute;s barato de todas las ofertas</p>
                  </a>

                  <a href="/14febrero/Superbowl" className={styles.card}>
                      <h3>Superbowl &rarr;</h3>
                      <p>Si no te gusta el deporte por lo menos le raspas un helado a tu novio</p>
                  </a>

                  <a href="/14febrero/Tabarish" className={styles.card}>
                      <h3>Tabarish &rarr;</h3>
                      <p>No tendr&aacute;s palabras para describirnos, pero espero que tengas dinero</p>
                  </a>
                  <div>
                 
                  

                  </div>

             
              </div>
              <p className={styles.description}>
                  Y si mejor nos comemos una pizza en casa
                   
        </p>
              <Image src="/Pizza/1.png" alt="Cosi" width={300} height={250} />

              <p className={styles.description}>
                  No iremos a ning&uacute;n lugar, ni nos comeremos una pizza as&iacute;, pero la pasaremos juntos, que al final de todo es lo m&aacute;s importante
                   
        </p>
              <p></p>
              <h1 className={styles.title}>
                  Feliz d&iacute;a de San Valent&iacute;n mi cuchurrumina
        </h1>
          </main>
          
          <footer className={styles.footer}>
            
        
          Cosi Cosi{' '}
         <img src="/logo.png" alt="Cosi" className={styles.logo} />
        
      </footer>
    </div>
  )
}
