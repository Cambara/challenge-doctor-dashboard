import { StatusEnum } from '../../../shared/enums/status.enum'
import { IService } from '../../../shared/services/service.protocol'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { Response } from 'express'
import { IMedicalAnalysisUpdateDto } from './medical-analysis-update.dto'
import { NotFoundMessageEnum, notFoundRequest, successRequest } from '../../../shared/helpers/http-response.helper'

export class MedicalAnalysisUpdateService implements IService<IMedicalAnalysisUpdateDto, Response> {
  private readonly medicalAnalysisRepository:MedicalAnalysisRepository

  constructor (medicalAnalysisRepository:MedicalAnalysisRepository) {
    this.medicalAnalysisRepository = medicalAnalysisRepository
  }

  execute = async ({ medicalAnalysis, medicalAnalysisId, response }: IMedicalAnalysisUpdateDto): Promise<Response> => {
    const currentMedicalAnalysis = await this.medicalAnalysisRepository.findOne({
      _id: medicalAnalysisId,
      status: StatusEnum.ATIVO
    })

    if (!currentMedicalAnalysis) return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)
    const isUpdated = await this.medicalAnalysisRepository.updateOne({ _id: medicalAnalysisId }, {
      $set: medicalAnalysis
    })

    if (!isUpdated) throw new Error(`Problem to update a medical analysis id ${medicalAnalysisId}`)
    return successRequest({}, response)
  }
}
