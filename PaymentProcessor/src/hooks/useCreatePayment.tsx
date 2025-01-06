import { useMutation } from '@tanstack/react-query'
import { postPayment } from '../lib/helpers'
import { PaymentPayload } from '../types/helpers'

export default function useCreatePayment() {
  const {
    mutateAsync: addPayment,
    isSuccess,
    isPending,
    data,
  } = useMutation({
    mutationFn: async (payment: PaymentPayload) => {
      const result = await postPayment(payment)
      return result.status
    },
  })

  return { addPayment, isPending, isSuccess, data }
}
