import { LabRepository } from '../lab.repository'
import { LabUpdateService } from './lab-update.service'
import { validatorService } from '../../../shared/services'
import { LabUpdateController } from './lab-update.controller'

const labRepository = LabRepository.getInstance()

const labUpdateService = new LabUpdateService(labRepository)

const labUpdateController = new LabUpdateController(labUpdateService, validatorService)

export { labUpdateController, labUpdateService }
