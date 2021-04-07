import { Request, Response } from 'express'
import { HttpResponse } from '../helpers/http-response.helper'

export interface IController {
  handle(request: Request, response: Response):Promise<HttpResponse>
}
