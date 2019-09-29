import React, { useState } from 'react'
import t from 'prop-types'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card as MaterialCard,
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

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
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
            <Card checked={!!checkboxes[pizza.id]}>
              <Label>
                <Checkbox
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

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ checked }) => checked ? '#000' : ''};
`

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
