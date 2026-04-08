import ApiError from "../../common/utils/api-error.js"
import haversineDist from "../../common/utils/distance.js"
import db from "../../db/db.js"
import { schoolsTable } from "../../db/schema.js"
import { createSchoolInput } from "./dto/api.dto.js"

const getSchools = async ({latitude, longitude}: {latitude: number, longitude: number}) => {
    const toRad = (deg: number) => deg * Math.PI / 180
    const userLocation = { latitude: toRad(latitude), longitude: toRad(longitude) }
    const schools = await db.select().from(schoolsTable)

    
    
    const filteredSchools = schools.filter((school) => {
        const distance = haversineDist(userLocation, { latitude: toRad(school.latitude), longitude: toRad(school.longitude) })
        return distance <= 10
    })
    
    if (filteredSchools.length === 0) {
        throw ApiError.notFound('No schools found within 10km')
    }

    return filteredSchools
}

const createSchool = async ({name, address, latitude, longitude}: createSchoolInput) => {
    const school = await db.insert(schoolsTable).values({
        name,
        address,
        latitude,
        longitude
    })

    if (!school) {
        throw ApiError.internal('Failed to create school')
    }

    return school
}

export {
    getSchools,
    createSchool
}