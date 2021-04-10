import { AbstractRepository } from '../../shared/repositories/abstract.reposity'
import { IMedicalAnalysisModel } from './models/medical-analysis.model'
import { IMedicalAnalysisDocument, MedicalAnalysis } from './schemas/medical-analysis.schema'

export class MedicalAnalysisRepository extends AbstractRepository<IMedicalAnalysisDocument, IMedicalAnalysisModel> {
  private static instance: MedicalAnalysisRepository
  private constructor () {
    super(MedicalAnalysis)
  }

  static getInstance = ():MedicalAnalysisRepository => {
    if (!MedicalAnalysisRepository.instance) MedicalAnalysisRepository.instance = new MedicalAnalysisRepository()
    return MedicalAnalysisRepository.instance
  }
}
