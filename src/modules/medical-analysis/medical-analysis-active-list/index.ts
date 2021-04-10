import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { MedicalAnalysisActiveListController } from './medical-analysis-active-list.controller'
import { MedicalAnalysisActiveListService } from './medical-analysis-active-list.service'

const medicalAnalysisRepository = MedicalAnalysisRepository.getInstance()

const medicalAnalysisActiveListService = new MedicalAnalysisActiveListService(medicalAnalysisRepository)

const medicalAnalysisActiveListController = new MedicalAnalysisActiveListController(medicalAnalysisActiveListService)

export { medicalAnalysisActiveListController, medicalAnalysisActiveListService }
