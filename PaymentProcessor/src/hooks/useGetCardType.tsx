import valid from 'card-validator'

export default function useGetCardType(cardNumber: string) {
  const { card } = valid.number(cardNumber)
  return card?.type ? card.type : ''
}
