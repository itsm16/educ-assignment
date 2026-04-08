import {Request, Response, NextFunction} from 'express'
import BaseDto from '../dto/base.dto.js'
import ApiError from '../utils/api-error.js';

const validate = (DtoClass: typeof BaseDto) => {
    return (req: Request, res: Response , next: NextFunction) => {
        const {data, errors} = DtoClass.validate(req.body);

        if(errors) {
            const errMessage = errors.join("; ")
            throw ApiError.badRequest(errMessage)
        }

        req.body = data;
        next();
    }

}

export default validate