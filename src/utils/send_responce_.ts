import { Response } from 'express'

type T_responce<T> = {
  success: boolean
  messege: string
  statusCode: number
  data: T
}

const sendResponce = <T>(res: Response, data: T_responce<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    messege: data?.messege,
    data: data,
  })
}

export default sendResponce
