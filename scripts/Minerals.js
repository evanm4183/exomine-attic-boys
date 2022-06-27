import { getMineralsInFacilities } from "./database.js"

const allMinInFac = getMineralsInFacilities()

export const MineralsHTML = facilityId => {

    let html = "<ul>"

    for (const minInFac of allMinInFac) {
        html += `<li>
            <input type="radio" name=`
    }
}