import { StatusEnum } from '../../../shared/enums/status.enum'
import { IService } from '../../../shared/services/service.protocol'
import { LabRepository } from '../lab.repository'
import { ILabDocument } from '../schemas/lab.schema'
import { ILabActiveListDto } from './lab-active-list.dto'

export class LabActiveListService implements IService<ILabActiveListDto, ILabDocument[]> {
  private readonly labRepository:LabRepository

  constructor (labRepository:LabRepository) {
    this.labRepository = labRepository
  }

  execute = async ({ page, limit }: ILabActiveListDto): Promise<ILabDocument[]> => {
    const skip = (page - 1) * limit
    return this.labRepository.find({
      status: StatusEnum.ATIVO
    }, {}, {
      skip,
      limit
    })
  }
}
