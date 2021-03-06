import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled';
import HowManyWords from './components/HowManyWords';
import Distance from './components/Distance';
import HowManyLetters from './components/HowManyLetters';
import Scope from './components/Scoping'; 
import Appearance from './components/Appearance';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Field Of Vision</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        The Field Of Vision!
        </h1>

        

        

        <div className={styles.grid}>
          <div className={styles.card}>
          <HowManyWords />
            <p>Set the number of words!</p>
          </div>

          <div className={styles.card}>
            <Distance />
            <p>Choose the distance!</p>
          </div>

          <div className={styles.card} >
            <HowManyLetters />
            <p>Choose the number of letters!</p>
          </div>

          <div className={styles.card} >
            <Scope />
            <p>What is the Scope? </p>
          </div>

          <div  className={styles.card} >
            <Appearance />
            <p>Set the Time!</p>
          </div>

         

          <button className="title">
             
             <Link href="/Game">
              <a>Play the game!!</a>
             </Link>
          </button>
          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
