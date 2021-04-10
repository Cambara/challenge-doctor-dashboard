import { AbstractRepository } from '../../shared/repositories/abstract.reposity'
import { ILabModel } from './models/lab.model'
import { ILabDocument, Lab } from './schemas/lab.schema'

export class LabRepository extends AbstractRepository<ILabDocument, ILabModel> {
  private static instance: LabRepository
  private constructor () {
    super(Lab)
  }

  static getInstance = ():LabRepository => {
    if (!LabRepository.instance) LabRepository.instance = new LabRepository()
    return LabRepository.instance
  }
}
