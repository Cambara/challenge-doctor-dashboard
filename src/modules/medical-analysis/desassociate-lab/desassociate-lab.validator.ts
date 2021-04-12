import { object, ObjectSchema, string } from 'yup'

export const desassociateLabValidator = ():ObjectSchema => {
  return object({
    labId: string().required()
  })
}
