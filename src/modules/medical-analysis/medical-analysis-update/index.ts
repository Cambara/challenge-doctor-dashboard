import { validatorService } from '../../../shared/services'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { MedicalAnalysisUpdateController } from './medical-analysis-update.controller'
import { MedicalAnalysisUpdateService } from './medical-analysis-update.service'

const medicalAnalysisRepository = MedicalAnalysisRepository.getInstance()

const medicalAnalysisUpdateService = new MedicalAnalysisUpdateService(medicalAnalysisRepository)

const medicalAnalysisUpdateController = new MedicalAnalysisUpdateController(medicalAnalysisUpdateService, validatorService)

export { medicalAnalysisUpdateController, medicalAnalysisUpdateService }
