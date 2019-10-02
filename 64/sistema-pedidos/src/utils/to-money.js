
function toMoney (value) {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
  // return Number(value).toLocaleString('pt-BR', {
  //  style: 'currency',
  //  currency: 'BRL'
  // })
}
export default toMoney
