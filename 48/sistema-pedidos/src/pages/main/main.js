import React, { useContext, Fragment } from 'react'
import styled from 'styled-components'
import {
  Typography,
  Grid,
  withStyles,
  Paper,
  Divider as MaterialDivider
} from '@material-ui/core'

import { AuthContext } from 'contexts/auth'
import Header from './header'

const Main = () => {
  const { userInfo } = useContext(AuthContext)

  return (
    <Fragment>
      <Header />

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
          <Typography variant='h3' gutterBottom>
            O que vai ser hoje, {userInfo.user.firstName}? =)
          </Typography>
          <Typography variant='h4' gutterBottom>
            Escolha o tamanho da pizza:
          </Typography>
        </Grid>
        <PizzaGrid>
          {pizzaSizes.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <PaperPizza>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>
                <Divider />
                <Title variant='h5'>{pizza.name}</Title>
                <Title>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {' '}
                  {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Title>
              </PaperPizza>
            </Grid>
          ))}
        </PizzaGrid>
      </Content>
    </Fragment>
  )
}

function singularOrPlural (amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const pizzaSizes = [
  {
    id: 0,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 1,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 2,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const PizzaGrid = styled(Grid).attrs({
  container: true,
  spacing: 16
})`
  padding: 20px;
`
const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`
const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center'
})``
const PaperPizza = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`
const Pizza = styled.div`
  align-items: center;
  border: 1px solid #CCC;
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;

  &::before,
  &::after {
    background-color: #CCC;
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`
const PizzaText = styled(Typography).attrs({
  variante: 'h5'
})`
align-items: center;
  background-color: #FFF;
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  z-index: 1;
`
const Content = styled.main`
  padding: 20px;
`
const style = (theme) => ({
  main: theme.mixins.toolbar
})
const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main}>Conteúdo</div>
))

export default Main
