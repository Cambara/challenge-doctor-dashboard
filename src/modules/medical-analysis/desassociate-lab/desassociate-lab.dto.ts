import { Response } from 'express'

export interface IDesassociateLabBodyDto {
  labId: string
}

export interface IDesassociateLabDto {
  medicalAnalysisId:string
  labId: string
  response: Response
}
