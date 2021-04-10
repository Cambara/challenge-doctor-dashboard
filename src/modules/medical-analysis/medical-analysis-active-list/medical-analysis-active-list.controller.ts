import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { MedicalAnalysisActiveListService } from './medical-analysis-active-list.service'

export class MedicalAnalysisActiveListController implements IController {
  private readonly medicalAnalysisActiveListService:MedicalAnalysisActiveListService

  constructor (medicalAnalysisActiveListService:MedicalAnalysisActiveListService) {
    this.medicalAnalysisActiveListService = medicalAnalysisActiveListService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { page, limit } = request.query

      const pageParam = page && typeof page === 'string' && !isNaN(parseInt(page)) ? parseInt(page) : 1
      const limitParam = limit && typeof limit === 'string' && !isNaN(parseInt(limit)) ? parseInt(limit) : 20

      const medicalAnalysisList = await this.medicalAnalysisActiveListService.execute({ page: pageParam, limit: limitParam })
      return successRequest(medicalAnalysisList, response)
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
