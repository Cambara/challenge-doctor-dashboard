import { validatorService } from '../../../shared/services'
import { LabRepository } from '../lab.repository'
import { LabAddController } from './lab-add.controller'
import { LabAddService } from './lab-add.service'

const labRepository = LabRepository.getInstance()
const labAddService = new LabAddService(labRepository)
const labAddController = new LabAddController(labAddService, validatorService)

export { labAddController, labAddService }
