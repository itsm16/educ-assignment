import z from "zod";

class BaseDto{
    static schema = z.object({});

    static validate(data : object){
        const { data: validatedData, error } = this.schema.safeParse(data)

        if(error){
            const errors = error.issues.map(err => err.message)
            return {data: null, errors}
        }

        return {data: validatedData, error: null}
    }
}

export default BaseDto