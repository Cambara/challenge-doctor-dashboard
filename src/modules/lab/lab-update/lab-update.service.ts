import { IService } from '../../../shared/services/service.protocol'
import { LabRepository } from '../lab.repository'
import { ILabUpdateDto } from './lab-update.dto'
import { NotFoundMessageEnum, notFoundRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { Response } from 'express'
import { StatusEnum } from '../../../shared/enums/status.enum'

export class LabUpdateService implements IService<ILabUpdateDto, Response> {
  private readonly labRepository:LabRepository

  constructor (labRepository:LabRepository) {
    this.labRepository = labRepository
  }

  execute = async ({ lab, labId, response }: ILabUpdateDto): Promise<Response> => {
    const currentLab = await this.labRepository.findOne({ _id: labId, status: StatusEnum.ATIVO })

    if (!currentLab) return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)

    const isUpdated = await this.labRepository.updateOne({ _id: labId }, {
      $set: lab
    })

    if (!isUpdated) throw new Error(`Problem to update a lab id ${labId}`)
    return successRequest({}, response)
  }
}
