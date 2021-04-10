import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { IAssociateLabBodyDto } from './associate-lab.dto'
import { AssociateLabService } from './associate-lab.service'
import { associateLabValidator } from './associate-lab.validator'

export class AssociateLabController implements IController {
  private readonly associateLabService:AssociateLabService
  private readonly validatorService:ValidatorService

  constructor (associateLabService:AssociateLabService, validatorService:ValidatorService) {
    this.associateLabService = associateLabService
    this.validatorService = validatorService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { body, params } = request

      const bodyParams = await this.validatorService.execute<IAssociateLabBodyDto>({ schema: associateLabValidator(), params: body })

      if (typeof bodyParams !== 'object' || Array.isArray(bodyParams)) return badRequest(bodyParams, response)

      const resp = await this.associateLabService.execute({
        medicalAnalysisId: params.id,
        labId: bodyParams.labId,
        response
      })
      return resp
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
