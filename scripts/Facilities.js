import { getFacilities, setFacility } from "./database.js";
import { MineralsHTML } from "./Minerals.js";

const facilities = getFacilities();

export const FacilitiesHTML = () => {
    let html = '<h3 style="text-align: start;" >Choose a facility</h3>';
    html += `<select name="facility">`;

    html += '<option value="0">Choose a facility</option>';

    for (const facility of facilities) {
        if (facility.isActive) {
            html += `<option value ="${facility.id}">${facility.name}</option>`;
        }
    }

    html += "</select>";
    return html;
};

document.addEventListener("change", (event) => {
    if (event.target.name === "facility" && event.target.value !== "0") {
        setFacility(parseInt(event.target.value));

        document.querySelector(".mineralOptionsContainer").innerHTML = MineralsHTML(
            parseInt(event.target.value)
        );
    } else if (event.target.name === "facility" && event.target.value === "0") {
        document.querySelector(".mineralOptionsContainer").innerHTML = "<h3>Facility Minerals</h3>";
    }
});