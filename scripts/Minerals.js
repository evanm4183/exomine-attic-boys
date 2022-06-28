import { getMineralsInFacilities, getMinerals, setMineral } from "./database.js"

// Retrieve the relevant tables
const allMinInFac = getMineralsInFacilities()
const minerals = getMinerals()

// Function that builds the radio buttons for the minerals in facilities with a given facility id
// Returns an html string of the radio buttons for Facilities.js
export const MineralsHTML = facilityId => {

    let html = ""

    // Iterate through the minerals in facilities table
    for (const minInFac of allMinInFac) {
        if (minInFac.facilityId === facilityId) {
            let mineralName = minerals.find(x => x.id === minInFac.mineralId).name 
            html += `
                <input type="radio" name="mineralOption" value="${minInFac.mineralId}">${minInFac.amountOwned} tons of ${mineralName}`
        }
    }

    html += ""
    return html
}
document.addEventListener("change", (event) => {
    if (event.target.name === "mineralOption") {
        setMineral(parseInt(event.target.value))
    }
})