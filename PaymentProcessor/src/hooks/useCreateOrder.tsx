import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postOrder } from '../lib/helpers'
import { OrderPayload } from '../types/helpers'

export default function useCreateOrder() {
  const queryClient = useQueryClient()
  const { mutateAsync: addOrder } = useMutation({
    mutationFn: async (order: OrderPayload) => await postOrder(order),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  })

  return { addOrder }
}
