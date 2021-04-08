import { IController } from '../../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { LabAddService } from './lab-add.service'
import { IValidatorProvider } from '../../../providers/validator/validator.protocol'
import { ILabAddDto } from './lab-add.dto'
import { ObjectSchema } from 'yup'
import { validator } from './lab-add.validator'
export class LabAddController implements IController {
  private readonly labAddService:LabAddService
  private readonly validatorProvider:IValidatorProvider<ObjectSchema>

  constructor (labAddService:LabAddService, validatorProvider:IValidatorProvider<ObjectSchema>) {
    this.labAddService = labAddService
    this.validatorProvider = validatorProvider
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const { body } = request

      const params = await this.validatorProvider.validate<ILabAddDto>(validator(), body)

      if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)

      const lab = await this.labAddService.execute(body)
      return successRequest(lab, response)
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
