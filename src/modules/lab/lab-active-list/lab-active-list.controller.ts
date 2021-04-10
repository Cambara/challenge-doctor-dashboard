import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { LabActiveListService } from './lab-active-list.service'

export class LabActiveListController implements IController {
  private readonly labActiveListService:LabActiveListService

  constructor (labActiveListService:LabActiveListService) {
    this.labActiveListService = labActiveListService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { page, limit } = request.query

      const pageParam = page && typeof page === 'string' && !isNaN(parseInt(page)) ? parseInt(page) : 1
      const limitParam = limit && typeof limit === 'string' && !isNaN(parseInt(limit)) ? parseInt(limit) : 20

      const lab = await this.labActiveListService.execute({ page: pageParam, limit: limitParam })
      return successRequest(lab, response)
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
