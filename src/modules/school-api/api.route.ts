import {Router} from 'express'
import * as controller from './api.controller.js'
import validate from '../../common/middleware/validate.middleware.js'
import { createSchoolDto } from './dto/api.dto.js'

const schoolApi : Router = Router()

schoolApi.get("/test", (req, res)=> res.send("runs"))

schoolApi.get("/listSchools", controller.getSchools)
schoolApi.post("/addSchool", validate(createSchoolDto), controller.createSchool)

export default schoolApi