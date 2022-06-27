import { getGovernors, getFacilities } from "./database.js"
import { MineralsHTML } from "./database.js"

const governors = getGovernors()

const facilities = getFacilities()

export const FacilitiesHTML = (govId) => {

}


document.addEventListener("change", (event) => {
    if (event.target.value == "")
})