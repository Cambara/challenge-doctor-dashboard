import { StatusEnum } from '../../../shared/enums/status.enum'
import { IService } from '../../../shared/services/service.protocol'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { Response } from 'express'
import { IAssociateLabDto } from './associate-lab.dto'
import { badRequest, NotFoundMessageEnum, notFoundRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { LabRepository } from '../../lab'

export class AssociateLabService implements IService<IAssociateLabDto, Response> {
  private readonly medicalAnalysisRepository:MedicalAnalysisRepository
  private readonly labRepository:LabRepository

  constructor (medicalAnalysisRepository:MedicalAnalysisRepository, labRepository:LabRepository) {
    this.medicalAnalysisRepository = medicalAnalysisRepository
    this.labRepository = labRepository
  }

  execute = async ({ labId, medicalAnalysisId, response }: IAssociateLabDto): Promise<Response> => {
    const lab = await this.labRepository.findOne({
      _id: labId,
      status: StatusEnum.ATIVO
    })

    if (!lab) return badRequest([`Doesn't find the lab id ${labId}`], response)

    const currentMedicalAnalysis = await this.medicalAnalysisRepository.findOne({
      _id: medicalAnalysisId,
      status: StatusEnum.ATIVO
    })

    if (!currentMedicalAnalysis) return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)
    const isUpdated = await this.medicalAnalysisRepository.updateOne({ _id: medicalAnalysisId }, {
      $addToSet: {
        labs: labId
      }
    })

    if (!isUpdated) throw new Error(`Problem to associate lab into a medical analysis ${medicalAnalysisId}`)
    return successRequest({}, response)
  }
}
