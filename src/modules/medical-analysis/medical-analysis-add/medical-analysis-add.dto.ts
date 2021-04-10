import { AnalysisTypeEnum } from '../models/medical-analysis.model'

export interface IMedicalAnalysisAddDto {
  name: string
  type: AnalysisTypeEnum
}
