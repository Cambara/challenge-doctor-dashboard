import { IService } from '../../../shared/services/service.protocol'
import { LabRepository } from '../lab.repository'
import { ILabRemoveDto } from './lab-remove.dto'
import { NotFoundMessageEnum, notFoundRequest, successRequest } from '../../../shared/helpers/http-response.helper'
import { Response } from 'express'
import { StatusEnum } from '../../../shared/enums/status.enum'

export class LabRemoveService implements IService<ILabRemoveDto, Response> {
  private readonly labRepository:LabRepository

  constructor (labRepository:LabRepository) {
    this.labRepository = labRepository
  }

  execute = async ({ labId, response }: ILabRemoveDto): Promise<Response> => {
    const currentLab = await this.labRepository.findOne({ _id: labId, status: StatusEnum.ATIVO })

    if (!currentLab) return notFoundRequest(NotFoundMessageEnum.OBJECT_NOT_FOUND, response)

    const isRemoved = await this.labRepository.updateOne({ _id: labId }, {
      $set: {
        status: StatusEnum.INATIVO
      }
    })

    if (!isRemoved) throw new Error(`Problem to remove a lab id ${labId}`)
    return successRequest({}, response)
  }
}
