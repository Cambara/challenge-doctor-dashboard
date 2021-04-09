import { Response } from 'express'
import { IAddressModel } from '../models/address.model'

export interface ILabUpdateBodyDto {
  name: string
  address: IAddressModel
}

export interface ILabUpdateDto {
  labId: string,
  lab: ILabUpdateBodyDto,
  response: Response
}
