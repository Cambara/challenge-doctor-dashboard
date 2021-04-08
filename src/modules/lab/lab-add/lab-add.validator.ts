import { object, ObjectSchema, string } from 'yup'

export const validator = ():ObjectSchema => {
  return object({
    name: string().required(),
    address: object({
      street: string().required(),
      district: string().required(),
      number: string().required(),
      city: string().required(),
      state: string().required(),
      postalCode: string().required()
    }).required()
  })
}
