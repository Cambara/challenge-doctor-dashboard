import { LabRepository } from '../lab.repository'
import { LabRemoveController } from './lab-remove.controller'
import { LabRemoveService } from './lab-remove.service'

const labRepository = LabRepository.getInstance()

const labRemoveService = new LabRemoveService(labRepository)

const labRemoveController = new LabRemoveController(labRemoveService)

export { labRemoveController, labRemoveService }
