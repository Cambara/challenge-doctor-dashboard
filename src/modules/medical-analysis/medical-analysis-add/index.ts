import { validatorService } from '../../../shared/services'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { MedicalAnalysisAddController } from './medical-analysis-add.controller'
import { MedicalAnalysisAddService } from './medical-analysis-add.service'

const medicalAnalysisRepository = MedicalAnalysisRepository.getInstance()

const medicalAnalysisAddService = new MedicalAnalysisAddService(medicalAnalysisRepository)

const medicalAnalysisAddController = new MedicalAnalysisAddController(medicalAnalysisAddService, validatorService)

export { medicalAnalysisAddController, medicalAnalysisAddService }
