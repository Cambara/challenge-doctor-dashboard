import { StatusEnum } from '../../../shared/enums/status.enum'

export enum AnalysisTypeEnum {
  ANALISE = 'analise',
  CLINICA = 'clinica',
  IMAGEM = 'imagem'
}

export interface IMedicalAnalysisModel {
  name: string
  status: StatusEnum
  type: AnalysisTypeEnum
  labs: string[]
}
