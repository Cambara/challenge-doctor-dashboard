import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { internalErrorRequest } from '../../../shared/helpers/http-response.helper'
import { LabRemoveService } from './lab-remove.service'

export class LabRemoveController implements IController {
  private readonly labRemoveService:LabRemoveService

  constructor (labRemoveService:LabRemoveService) {
    this.labRemoveService = labRemoveService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { params } = request

      const resp = await this.labRemoveService.execute({
        labId: params.id,
        response
      })
      return resp
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
