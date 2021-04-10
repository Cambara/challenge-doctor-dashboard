import { mixed, object, ObjectSchema, string } from 'yup'
import { AnalysisTypeEnum } from './models/medical-analysis.model'

export const defaultMedicalAnalysisValidator = ():ObjectSchema => {
  return object({
    name: string().required(),
    type: mixed().oneOf(Object.values(AnalysisTypeEnum)).required()
  })
}
