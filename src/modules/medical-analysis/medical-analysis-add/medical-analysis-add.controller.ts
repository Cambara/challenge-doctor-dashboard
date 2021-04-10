import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../../shared/services/validator/validator.service'
import { defaultMedicalAnalysisValidator } from '../default.validator'
import { MedicalAnalysisAddService } from './medical-analysis-add.service'
import { IMedicalAnalysisAddDto } from './medical-analysis-add.dto'

export class MedicalAnalysisAddController implements IController {
  private readonly medicalAnalysisAddService:MedicalAnalysisAddService
  private readonly validatorService:ValidatorService

  constructor (medicalAnalysisAddService:MedicalAnalysisAddService, validatorService:ValidatorService) {
    this.medicalAnalysisAddService = medicalAnalysisAddService
    this.validatorService = validatorService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { body } = request

      const params = await this.validatorService.execute<IMedicalAnalysisAddDto>({ schema: defaultMedicalAnalysisValidator(), params: body })

      if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

      const medicalAnalysis = await this.medicalAnalysisAddService.execute(params)
      return successRequest(medicalAnalysis, response)
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
