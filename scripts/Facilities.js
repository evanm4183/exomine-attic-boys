import { getFacilities, setFacility } from "./database.js"
import { MineralsHTML } from "./Minerals.js"

const facilities = getFacilities()

export const FacilitiesHTML = () => {
    let html = "<h5>Choose a facility</h5>"
    html += `<select name="facility">`

    html += '<option value="0">Choose a facility</option>'

    for (const facility of facilities) {
        html += `<option value ="${facility.id}">${facility.name}</option>`
    }

    html += "</select>"
    return html
    
}


document.addEventListener("change", (event) => {
    if (event.target.name === "facility" && event.target.value !== "0") {
        setFacility(parseInt(event.target.value))
        MineralsHTML(parseInt(event.target.value))
    }
})