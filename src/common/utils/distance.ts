type userLocation = {
    latitude: number,
    longitude: number
}

type schoolLocation = {
    latitude: number,
    longitude: number
}

const haversineDist = (userLocation: userLocation, schoolLocation: schoolLocation) => {
    const R = 6371;

    const dLat = userLocation.latitude - schoolLocation.latitude;
    const dLon = userLocation.longitude - schoolLocation.longitude;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(userLocation.latitude)  * Math.cos(schoolLocation.latitude) * Math.sin(dLon/2) * Math.sin(dLon/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}

export default haversineDist