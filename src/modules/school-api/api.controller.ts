import { Request, Response } from 'express'
import * as service from './api.service.js'
import ApiResponse from '../../common/utils/api-response.js'

const getSchools = async (req: Request, res: Response) => {
    const schools = await service.getSchools({
        latitude: Number(req.query.latitude),
        longitude: Number(req.query.longitude)
    })
    ApiResponse.ok(res, "Fetched Successfully", schools)
}

const createSchool = async (req: Request, res: Response) => {
    const school = await service.createSchool(req.body)
    ApiResponse.ok(res, "Created Successfully", school)
}

export {
    getSchools,
    createSchool
}