import { LabRepository } from '../..'
import { validatorService } from '../../../shared/services'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { DesassociateLabController } from './desassociate-lab.controller'
import { DesassociateLabService } from './desassociate-lab.service'

const medicalAnalysisRepository = MedicalAnalysisRepository.getInstance()
const labRepository = LabRepository.getInstance()

const desassociateLabService = new DesassociateLabService(medicalAnalysisRepository, labRepository)
const desassociateLabController = new DesassociateLabController(desassociateLabService, validatorService)

export { desassociateLabController, desassociateLabService }
