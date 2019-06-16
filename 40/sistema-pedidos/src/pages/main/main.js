import React, { useState, useContext, Fragment } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToobar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid
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

      <Content>
        <Grid container justify='center'>
          <Grid item>
            <Typography variant='h3'>
              O que vai ser hoje, {userName}? =)
            </Typography>
          </Grid>
        </Grid>
      </Content>
    </Fragment>
  )
}

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
  padding: 80px 20px 20px;
`

export default Main
