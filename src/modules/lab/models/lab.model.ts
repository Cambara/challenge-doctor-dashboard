import { StatusEnum } from '../../../shared/enums/status.enum'
import { IAddressModel } from './address.model'

export interface ILabModel {
  name: string
  status: StatusEnum
  address: IAddressModel
}
