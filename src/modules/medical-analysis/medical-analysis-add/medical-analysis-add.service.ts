import { StatusEnum } from '../../../shared/enums/status.enum'
import { IService } from '../../../shared/services/service.protocol'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { IMedicalAnalysisModel } from '../models/medical-analysis.model'
import { IMedicalAnalysisDocument } from '../schemas/medical-analysis.schema'
import { IMedicalAnalysisAddDto } from './medical-analysis-add.dto'

export class MedicalAnalysisAddService implements IService<IMedicalAnalysisAddDto, IMedicalAnalysisDocument> {
  private readonly medicalAnalysisRepository:MedicalAnalysisRepository

  constructor (medicalAnalysisRepository:MedicalAnalysisRepository) {
    this.medicalAnalysisRepository = medicalAnalysisRepository
  }

  execute = async (dto: IMedicalAnalysisAddDto): Promise<IMedicalAnalysisDocument> => {
    const medicalAnalysis:IMedicalAnalysisModel = Object.assign({}, dto, { status: StatusEnum.ATIVO, labs: [] })
    return this.medicalAnalysisRepository.create(medicalAnalysis)
  }
}
