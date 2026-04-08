import z from "zod";
import BaseDto from "../../../common/dto/base.dto.js";

class createSchoolDto extends BaseDto{
    static schema = z.object({
        name: z.string({error: "Name is required"}),
        address: z.string({error: "Address is required"}),
        latitude: z.float32({error: "Latitude (type : Float) is required"}),
        longitude: z.float32({error: "Longitude ( type: Float ) is required"})
    })
}

//types
type createSchoolInput = z.infer<typeof createSchoolDto.schema>

export {
    createSchoolDto
}

export type {
    createSchoolInput
}