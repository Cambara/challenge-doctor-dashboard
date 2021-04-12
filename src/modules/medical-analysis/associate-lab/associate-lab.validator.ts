import { object, ObjectSchema, string } from 'yup'

export const associateLabValidator = ():ObjectSchema => {
  return object({
    labId: string().required()
  })
}
