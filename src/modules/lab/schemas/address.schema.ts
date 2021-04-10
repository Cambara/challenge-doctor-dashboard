import { Document } from 'mongoose'
import { createEmbeddedSchema } from '../../../shared/helpers/schema.helper'
import { IAddressModel } from '../models/address.model'

export interface IAddressDocument extends IAddressModel, Document { }

const AddressSchema = createEmbeddedSchema({
  street: String,
  district: String,
  number: String,
  city: String,
  state: String,
  postalCode: String
})

export { AddressSchema }
