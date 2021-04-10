import { StatusEnum } from '../../../shared/enums/status.enum'
import { IService } from '../../../shared/services/service.protocol'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { Response } from 'express'
import { IMedicalAnalysisRemoveDto } from './medical-analysis-remove.dto'
import { NotFoundMessageEnum, notFoundRequest, successRequest } from '../../../shared/helpers/http-response.helper'

export class MedicalAnalysisRemoveService implements IService<IMedicalAnalysisRemoveDto, Response> {
  private readonly medicalAnalysisRepository:MedicalAnalysisRepository

  constructor (medicalAnalysisRepository:MedicalAnalysisRepository) {
    this.medicalAnalysisRepository = medicalAnalysisRepository
  }

  execute = async ({ medicalAnalysisId, response }: IMedicalAnalysisRemoveDto): Promise<Response> => {
    const currentMedicalAnalysis = await this.medicalAnalysisRepository.findOne({
      _id: medicalAnalysisId,
      status: StatusEnum.ATIVO
    })

    if (!currentMedicalAnalysis) return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)
    const isRemoved = await this.medicalAnalysisRepository.updateOne({ _id: medicalAnalysisId }, {
      $set: {
        status: StatusEnum.INATIVO
      }
    })

    if (!isRemoved) throw new Error(`Problem to remove a medical analysis id ${medicalAnalysisId}`)
    return successRequest({}, response)
  }
}
