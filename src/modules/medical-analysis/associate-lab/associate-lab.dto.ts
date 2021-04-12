import { Response } from 'express'

export interface IAssociateLabBodyDto {
  labId: string
}

export interface IAssociateLabDto {
  medicalAnalysisId:string
  labId: string
  response: Response
}
