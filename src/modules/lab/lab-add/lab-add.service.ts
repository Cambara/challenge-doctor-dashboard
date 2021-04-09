import { StatusEnum } from '../../../shared/enums/status.enum'
import { IService } from '../../../shared/services/service.protocol'
import { LabRepository } from '../lab.repository'
import { ILabModel } from '../models/lab.model'
import { ILabDocument } from '../schemas/lab.schema'
import { ILabAddDto } from './lab-add.dto'

export class LabAddService implements IService<ILabAddDto, ILabDocument> {
  private readonly labRepository:LabRepository

  constructor (labRepository:LabRepository) {
    this.labRepository = labRepository
  }

  execute = async (dto: ILabAddDto): Promise<ILabDocument> => {
    const lab:ILabModel = Object.assign({}, dto, { status: StatusEnum.ATIVO })
    return this.labRepository.create(lab)
  }
}
