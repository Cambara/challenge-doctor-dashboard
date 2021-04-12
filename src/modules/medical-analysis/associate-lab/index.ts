import { LabRepository } from '../..'
import { validatorService } from '../../../shared/services'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { AssociateLabController } from './associate-lab.controller'
import { AssociateLabService } from './associate-lab.service'

const medicalAnalysisRepository = MedicalAnalysisRepository.getInstance()
const labRepository = LabRepository.getInstance()

const associateLabService = new AssociateLabService(medicalAnalysisRepository, labRepository)
const associateLabController = new AssociateLabController(associateLabService, validatorService)

export { associateLabController, associateLabService }
