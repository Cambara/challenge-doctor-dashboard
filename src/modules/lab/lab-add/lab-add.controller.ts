import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { LabAddService } from './lab-add.service'
import { ILabAddDto } from './lab-add.dto'
import { defaultLabValidator } from '..//default.validator'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
export class LabAddController implements IController {
  private readonly labAddService:LabAddService
  private readonly validatorService:ValidatorService

  constructor (labAddService:LabAddService, validatorService:ValidatorService) {
    this.labAddService = labAddService
    this.validatorService = validatorService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { body } = request

      const params = await this.validatorService.execute<ILabAddDto>({ schema: defaultLabValidator(), params: body })

      if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

      const lab = await this.labAddService.execute(params)
      return successRequest(lab, response)
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
