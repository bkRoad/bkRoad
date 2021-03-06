import React, {Component} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Footer from "../components/footer.js"
import Router from 'next/router'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email : '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state.isLoggedIn = false;
  }

  handleChange(event) { 
    if (event.target.id == "email") {
      this.setState({email: event.target.value});
    }
    else { //password
      this.setState({password: event.target.value});
    }

  }

  handleSubmit(event) {
    // alert('A submission occured');

    event.preventDefault();    
    useEffect(() => {
      sessionStorage.setItem('state', "isLoggedIn")
    }, true)
    Router.push('/')
    //something else 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Stack className={styles.login}>
          <h2 className={styles.h2}> Welcome Back! </h2>
          <Image src="/../public/alternate_combined_logo.png" height={127.75} width={477.5}/>
          {/* maybe replace with inputs?? */}
          <TextField id="email" label="Email" variant="outlined" required={true} size="small" margin="dense" onChange={this.handleChange}/>
          <TextField id="password" label="Password" variant="outlined" required={true} type="password" size="small" margin="dense" onChange={this.handleChange}/>
          <Button className={styles.Button} variant="contained" type="submit">LogIn</Button>
        </Stack>

      </form>
    )
  }
}

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>bkRoad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LoginForm />
      </main> 

      <Footer />
    
    </div>
  )
}