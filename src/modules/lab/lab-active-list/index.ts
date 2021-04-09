import { LabRepository } from '../lab.repository'
import { LabActiveListController } from './lab-active-list.controller'
import { LabActiveListService } from './lab-active-list.service'

const labRepository = LabRepository.getInstance()

const labActiveListService = new LabActiveListService(labRepository)

const labActiveListController = new LabActiveListController(labActiveListService)

export { labActiveListController, labActiveListService }
