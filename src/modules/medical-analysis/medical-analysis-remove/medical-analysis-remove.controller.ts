import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { internalErrorRequest } from '../../../shared/helpers/http-response.helper'
import { MedicalAnalysisRemoveService } from './medical-analysis-remove.service'

export class MedicalAnalysisRemoveController implements IController {
  private readonly medicalAnalysisRemoveService:MedicalAnalysisRemoveService

  constructor (medicalAnalysisRemoveService:MedicalAnalysisRemoveService) {
    this.medicalAnalysisRemoveService = medicalAnalysisRemoveService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { params } = request

      const resp = await this.medicalAnalysisRemoveService.execute({
        medicalAnalysisId: params.id,
        response
      })
      return resp
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
