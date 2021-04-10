import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { MedicalAnalysisRemoveController } from './medical-analysis-remove.controller'
import { MedicalAnalysisRemoveService } from './medical-analysis-remove.service'

const medicalAnalysisRepository = MedicalAnalysisRepository.getInstance()

const medicalAnalysisRemoveService = new MedicalAnalysisRemoveService(medicalAnalysisRepository)

const medicalAnalysisRemoveController = new MedicalAnalysisRemoveController(medicalAnalysisRemoveService)

export { medicalAnalysisRemoveController, medicalAnalysisRemoveService }
