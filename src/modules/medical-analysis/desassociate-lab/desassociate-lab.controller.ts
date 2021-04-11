import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { DesassociateLabService } from './desassociate-lab.service'
import { desassociateLabValidator } from './desassociate-lab.validator'
import { IDesassociateLabBodyDto } from './desassociate-lab.dto'

export class DesassociateLabController implements IController {
  private readonly desassociateLabService:DesassociateLabService
  private readonly validatorService:ValidatorService

  constructor (desassociateLabService:DesassociateLabService, validatorService:ValidatorService) {
    this.desassociateLabService = desassociateLabService
    this.validatorService = validatorService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { body, params } = request

      const bodyParams = await this.validatorService.execute<IDesassociateLabBodyDto>({ schema: desassociateLabValidator(), params: body })

      if (typeof bodyParams !== 'object' || Array.isArray(bodyParams)) return badRequest(bodyParams, response)

      const resp = await this.desassociateLabService.execute({
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
