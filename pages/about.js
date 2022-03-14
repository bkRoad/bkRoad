import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from "../components/sidebar";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar loggedIn={true}/> 

      <h1 className={styles.title}> About Us </h1>
      <body>bkRoad is a nonprofit organization founded to help deliver physical books to those in need. A large percent of the US population doesn't have 
        access to physical books - by using bkRoad, those in need will get free and efficient access to books through a slick and easy to use web application. </body>
      

    </div>
  )
}