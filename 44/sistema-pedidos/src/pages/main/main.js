import React, { useState, useContext, Fragment } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToobar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid,
  withStyles,
  Paper,
  Divider as MaterialDivider
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import { AuthContext } from 'contexts/auth'

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }
  const handleClose = () => {
    setAnchorElement(null)
  }

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <LogoContiner>
            <Logo />
          </LogoContiner>

          <Typography color='inherit'>Olá {userName} =)</Typography>
          <IconButton color='inherit' onClick={handleOpenMenu}>
            <AccountCircle />
          </IconButton>

          <Menu
            open={!!anchorElement}
            onClose={handleClose}
            anchorEl={anchorElement}
          >
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
          <Typography variant='h3' gutterBottom>
            O que vai ser hoje, {userName}? =)
          </Typography>
          <Typography variant='h4' gutterBottom>
            Escolha o tamanho da pizza:
          </Typography>
        </Grid>
        <Grid container spacing={16}>
          {pizzaSizes.map((pizza) => (
            <Grid item key='pizza.id' xs={4}>
              <PaperPizza>
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>
                <Divider />
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {pizza.flavours} sabores
                </Typography>
              </PaperPizza>
            </Grid>
          ))}
        </Grid>
      </Content>
    </Fragment>
  )
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

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`
const PaperPizza = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
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
const Toolbar = styled(MaterialToobar)`
  margin: 0 auto;
  max-width: 950px;
  width: 100%;
`
const LogoContiner = styled.div`
  flex-grow: 1;
`
const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: #FFF;
  }
  & line {
    stroke: #FFF;
  }
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
