import { YupProvider } from '../../../providers/validator/yup.provider'
import { LabRepository } from '../lab.repository'
import { LabAddController } from './lab-add.controller'
import { LabAddService } from './lab-add.service'

const labRepository = LabRepository.getInstance()
const validateProvider = YupProvider.getInstance()
const labAddService = new LabAddService(labRepository)
const labAddController = new LabAddController(labAddService, validateProvider)

export { labAddController, labAddService }
