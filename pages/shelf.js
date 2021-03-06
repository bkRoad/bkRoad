import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import BookDisplay from '../components/book_display';
import styles from '../styles/shelf.module.css'
import Footer from '../components/footer';
import Sidebar from "../components/sidebar";

class Shelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: true, search: '', books: this.props.books} //should be passed in from somewhere else
  }

  render() {
    var changeBooks = this.props.books;
    var available = changeBooks.filter(a => (a.status == "available"));
    
    return (
      <div className={styles.container}>
        <Head>
          <title>bkRoad</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Sidebar loggedIn={true}/> 
        <div>
          <h1>Shelf</h1>
          <h2>Available for Delivery</h2>
          <div className={styles.bookdisplay}>
            <BookDisplay books={available}/>
          </div>        
        </div>   
        
        <Footer />
      </div>
    )
  }
}

export default function Take({ books }) {
  return (
    <Shelf books={books}/>
  )
}

export async function getServerSideProps(context) { //triet 
  const books = [
      {
          title: "The Queen of Paris: A Novel of Coco Chanel",
          author: "Pamela Binnings Ewen" ,
          imageURL: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9781982546939&erroroverride=1",
          description: "Legendary fashion designer Coco Chanel is revered for her sophisticated style -- the iconic little black dress -- and famed for her intoxicating perfume Chanel No. 5. Yet behind the public persona is a complicated woman of intrigue, shadowed by mysterious rumors. The Queen of Paris, the new novel from award-winning author Pamela Binnings Ewen, vividly imagines the hidden life of Chanel during the four years of Nazi occupation in Paris in the midst of WWII -- as discovered in recently unearthed wartime files.",
          status: "available"
      },
      {
          title: "The wonders",
          author: "Medel, Elena" ,
          imageURL: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9781643753027&erroroverride=1",
          description: "Through the rich inner lives of two ordinary, unforgettable women, award-winning Spanish poet Elena Medel brings a half-century of the feminist movement to life, revealing the simmering truth that money is ultimately the limiting factor in most women's lives",
          status: "not available",
      },
      {
          title: "East of hounslow",
          author: "Khurrum Rahman" ,
          imageURL: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9780008384661&erroroverride=1",
          description: "No description available",
          status: "available"
      }
  ]

  return {
      props: {
          books
      }
  }
}