import valid from 'card-validator'
import { RegisterOptions } from 'react-hook-form'
import { FormValues } from '../types/componentTypes'

export const nameValidation: RegisterOptions<FormValues> = {
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

export const shippingAddressValidation = {
  required: {
    value: true,
    message: 'la dirección de envío es requerida',
  },

  minLength: {
    value: 3,
    message: 'la dirección debe terner al menos 3 caracteres',
  },

  maxLength: {
    value: 30,
    message: 'la dirección no debe superar los 30 caracteres',
  },
}

export const countryValidation = {
  required: {
    value: true,
    message: 'el país es requerido',
  },
}

export const zipCodeValidations = {
  required: {
    value: true,
    message: 'código postal es requerido',
  },

  maxLength: {
    value: 6,
    message: 'el código postal no debe superar los 6 caracteres',
  },
}

export const cardNumberValidation: RegisterOptions<FormValues> = {
  required: {
    value: true,
    message: 'el número de la tarjeta es requerido',
  },

  validate: (value: string | number | undefined) => {
    const formattedValue = String(value)
    const { isValid } = valid.number(formattedValue)
    return isValid || 'Número no válido'
  },
}

export const cardExpDateValidation: RegisterOptions<FormValues> = {
  required: {
    value: true,
    message: 'la fecha de expiración es requerida',
  },

  validate: (value: string | number | unknown) => {
    let stringValue: string
    if (value) {
      stringValue = value.toString()
      const currentYear = new Date().getFullYear().toString()
      const year = stringValue.replaceAll('-', ' ').split(' ')[0]
      const [theYear, month] = stringValue.replaceAll('-', ' ').split(' ')

      if (year <= currentYear) {
        return 'Año no válido'
      } else {
        const { isValid } = valid.expirationDate(`${theYear}-${month}`)
        return isValid || 'Fecha no válida'
      }
    }
  },
}

export const cardCodeValidation: RegisterOptions<FormValues> = {
  required: {
    value: true,
    message: 'el código de seguridad es requerida',
  },

  validate: (value: string | number | undefined) => {
    const formattedValue = String(value)
    const { isValid } = valid.cvv(formattedValue)
    return isValid || 'código no válido'
  },
}
