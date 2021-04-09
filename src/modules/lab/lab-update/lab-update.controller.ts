import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest } from '../../../shared/helpers/http-response.helper'
import { LabUpdateService } from './lab-update.service'
import { ILabUpdateBodyDto } from './lab-update.dto'
import { defaultLabValidator } from '..//default.validator'
import { ValidatorService } from '../../../shared/services/validator/validator.service'

export class LabUpdateController implements IController {
  private readonly labUpdateService:LabUpdateService
  private readonly validatorService:ValidatorService

  constructor (labUpdateService:LabUpdateService, validatorService:ValidatorService) {
    this.labUpdateService = labUpdateService
    this.validatorService = validatorService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { body, params } = request

      const bodyParams = await this.validatorService.execute<ILabUpdateBodyDto>({ schema: defaultLabValidator(), params: body })

      if (typeof bodyParams !== 'object' || Array.isArray(bodyParams)) return badRequest(bodyParams, response)

      const resp = await this.labUpdateService.execute({
        lab: bodyParams,
        labId: params.id,
        response
      })
      return resp
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
