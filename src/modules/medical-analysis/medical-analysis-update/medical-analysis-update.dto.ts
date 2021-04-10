import { Response } from 'express'
import { AnalysisTypeEnum } from '../models/medical-analysis.model'

export interface IMedicalAnalysisBodyDto {
  name: string
  type: AnalysisTypeEnum
}

export interface IMedicalAnalysisUpdateDto {
  medicalAnalysisId: string,
  medicalAnalysis: IMedicalAnalysisBodyDto,
  response: Response
}
