import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

const config = {
  apiKey: 'AIzaSyCvSCUrNh5gK46414T9llzVE08yU_hII70',
  authDomain: 'reactzzaria-10c3b.firebaseapp.com',
  databaseURL: 'https://reactzzaria-10c3b.firebaseio.com',
  projectId: 'reactzzaria-10c3b',
  storageBucket: 'reactzzaria-10c3b.appspot.com',
  messagingSenderId: '565150912644'
}

firebase.initializeApp(config)

const login = () => {
  const provider = new firebase.auth.GithubAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

function Login () {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  })

  const { isUserLoggedIn, user } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  const logount = () => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

  return (
    <Container>
      <Grid container justify='center' spacing={40}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify='center'>
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant='contained' onClick={logount}>
                Sair
              </Button>
            </>
          )}
          {!isUserLoggedIn && (
            <GithubButton onClick={login}>
             Entrar com Github
            </GithubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`
const Logo = styled(MainLogo)`
  width: 100%;
`
const GithubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
