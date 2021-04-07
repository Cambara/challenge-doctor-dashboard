import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { LabAddService } from './lab-add.service'

export class LabAddController implements IController {
  private readonly labAddService:LabAddService

  constructor (labAddService:LabAddService) {
    this.labAddService = labAddService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    const { body } = request

    try {
      const lab = await this.labAddService.execute(body)
      return successRequest(lab, response)
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
