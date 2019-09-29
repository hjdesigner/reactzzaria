import React, { useState } from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card,
  Grid,
  Typography
} from '@material-ui/core'
import {
  H4,
  HeaderContent,
  PizzasGrid,
  Divider,
  CardActionArea
} from 'ui'
import { singularOrPlural } from 'utils'
import { HOME } from 'routes'
import pizzasFlavous from 'fake-data/pizzas-flavous'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))
  console.log('checkboxes', checkboxes)

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state

  const handleChangeCheckbox = (pizzaId) => (e) => {
    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: !checkboxes[pizzaId]
      }
    })
  }

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até {flavours} {' '}
          {singularOrPlural(flavours, 'sabor', 'sabores')}:
        </H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzasFlavous.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <Label>
                <input
                  type='checkbox'
                  checked={!!checkboxes[pizza.id]}
                  onChange={handleChangeCheckbox(pizza.id)}
                />
                <Img src={pizza.image} alt={pizza.name} />
                <Divider />
                <Typography>{pizza.name}</Typography>
                <Typography variant='h5'>{pizza.value[id]}</Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const Img = styled.img`
  width: 200px;
`
const Label = styled(CardActionArea).attrs({
  component: 'label'
})``

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
