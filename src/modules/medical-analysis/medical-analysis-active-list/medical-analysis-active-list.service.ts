import { StatusEnum } from '../../../shared/enums/status.enum'
import { IService } from '../../../shared/services/service.protocol'
import { MedicalAnalysisRepository } from '../medical-analysis.repository'
import { IMedicalAnalysisDocument } from '../schemas/medical-analysis.schema'
import { IMedicalAnalysisActiveListDto } from './medical-analysis-active-list.dto'

export class MedicalAnalysisActiveListService implements IService<IMedicalAnalysisActiveListDto, IMedicalAnalysisDocument[]> {
  private readonly medicalAnalysisRepository:MedicalAnalysisRepository

  constructor (medicalAnalysisRepository:MedicalAnalysisRepository) {
    this.medicalAnalysisRepository = medicalAnalysisRepository
  }

  execute = async ({ page, limit }: IMedicalAnalysisActiveListDto): Promise<IMedicalAnalysisDocument[]> => {
    const skip = (page - 1) * limit
    return this.medicalAnalysisRepository.find({
      status: StatusEnum.ATIVO
    }, {}, {
      skip,
      limit
    })
  }
}
