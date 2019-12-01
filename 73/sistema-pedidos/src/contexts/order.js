import React, { createContext } from 'react'
import t from 'prop-types'

export const OrderContext = createContext()

function Order ({ children }) {
  return (
    <OrderContext provider value={{}}>
      {children}
    </OrderContext>
  )
}

Order.propType = {
  children: t.node.isRequired
}

export default Order
