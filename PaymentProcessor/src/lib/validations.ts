import valid from 'card-validator'
import { FieldValues } from 'react-hook-form'

export const nameValidation = {
  required: {
    value: true,
    message: 'el nombre es requerido',
  },

  minLength: {
    value: 3,
    message: 'el nombre debe terner al menos 3 caracteres',
  },

  maxLength: {
    value: 20,
    message: 'el nombre no debe superar los 20 caracteres',
  },
}

export const cardNumberValidation = (value: FieldValues) => {
  return {
    required: {
      value: true,
      message: 'el número de la tarjeta es requerido',
    },

    validate: () => {
      console.log(value)
      if (value) {
        const { card, isValid } = valid.number(value)
        console.log(card, isValid)
      }
    },
  }
}

export const cardExpDateValidation = (value: FieldValues) => {
  return {
    required: {
      value: true,
      message: 'la fecha de expiración es requerida',
    },

    validate: () => {
      const { isValid } = valid.expirationDate(value)
      console.log(isValid)
    },
  }
}

export const cardCodeValidation = (value: FieldValues) => {
  return {
    required: {
      value: true,
      message: 'el código de seguridad es requerida',
    },

    validate: (data: FieldValues) => {
      if (data === value) {
        const { isValid } = valid.cvv(value)
        console.log(isValid)
      }
    },
  }
}
