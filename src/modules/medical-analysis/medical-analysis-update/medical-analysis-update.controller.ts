import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { defaultMedicalAnalysisValidator } from '../default.validator'
import { MedicalAnalysisUpdateService } from './medical-analysis-update.service'
import { IMedicalAnalysisBodyDto } from './medical-analysis-update.dto'

export class MedicalAnalysisUpdateController implements IController {
  private readonly medicalAnalysisUpdateService:MedicalAnalysisUpdateService
  private readonly validatorService:ValidatorService

  constructor (medicalAnalysisUpdateService:MedicalAnalysisUpdateService, validatorService:ValidatorService) {
    this.medicalAnalysisUpdateService = medicalAnalysisUpdateService
    this.validatorService = validatorService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { body, params } = request

      const bodyParams = await this.validatorService.execute<IMedicalAnalysisBodyDto>({ schema: defaultMedicalAnalysisValidator(), params: body })

      if (typeof bodyParams !== 'object' || Array.isArray(bodyParams)) return badRequest(bodyParams, response)

      const resp = await this.medicalAnalysisUpdateService.execute({
        medicalAnalysis: bodyParams,
        medicalAnalysisId: params.id,
        response
      })
      return resp
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
