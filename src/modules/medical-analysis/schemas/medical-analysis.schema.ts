import { Document, model } from 'mongoose'
import { createDefaultSchema } from '../../../shared/helpers/schema.helper'
import { IMedicalAnalysisModel } from '../models/medical-analysis.model'

export interface IMedicalAnalysisDocument extends IMedicalAnalysisModel, Document { }

const MedicalAnalysisSchema = createDefaultSchema({
  name: String,
  status: String,
  type: String,
  labs: Array(String)
})

const MedicalAnalysis = model<IMedicalAnalysisDocument>('MedicalAnalysis', MedicalAnalysisSchema, 'MedicalAnalysis')

export { MedicalAnalysisSchema, MedicalAnalysis }
