import React, { PureComponent } from 'react'
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

class Login extends PureComponent {
  componentDidMount () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('usuário logado', user)
      } else {
        console.log('usuário não esta logado', user)
      }
    })
  }

  render () {
    return (
      <Container>
        <Grid container justify='center' spacing={40}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item xs={12} container justify='center'>
            <GithubButton onClick={() => {
              const provider = new firebase.auth.GithubAuthProvider()
              firebase.auth().signInWithRedirect(provider)
            }}>
            Entrar com Github
            </GithubButton>
          </Grid>
        </Grid>
      </Container>
    )
  }
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
