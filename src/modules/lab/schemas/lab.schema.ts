import { Document, model } from 'mongoose'
import { createDefaultSchema } from '../../../shared/helpers/schema.helper'
import { ILabModel } from '../models/lab.model'
import { AddressSchema } from './address.schema'

export interface ILabDocument extends ILabModel, Document { }

const LabSchema = createDefaultSchema({
  name: String,
  status: String,
  address: AddressSchema
})

const Lab = model<ILabDocument>('Lab', LabSchema, 'Lab')

export { LabSchema, Lab }
