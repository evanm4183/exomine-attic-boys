import { getGovernors, setColony } from "./database.js";
import { ColonyResourcesHTML } from "./ColonyResources.js";
import { FacilitiesHTML } from "./Facilities.js";

document.addEventListener("change", (event) => {
    if (event.target.id === "governors-dropdown" && event.target.value != 0) {
        const governorId = parseInt(event.target.value);
        setColony(governors.find((gov) => gov.id === governorId).colonyId);

        document.querySelector(".colonyMineralsContainer").innerHTML = ColonyResourcesHTML();
        document.querySelector(".facilitiesDropdownContainer").innerHTML = FacilitiesHTML();
    } else if (event.target.id === "governors-dropdown" && event.target.value == 0) {
        document.querySelector(".facilitiesDropdownContainer").innerHTML = `<h3 style="text-align: start;">Choose a facility</h3><select name="facility"><option value="0">Choose a facility</option></select>`;
        document.querySelector(".mineralOptionsContainer").innerHTML = "<h3>Facility Minerals</h3>";
        document.querySelector(".colonyMineralsContainer").innerHTML = "<h3>Colony Minerals</h3>";
    }
});

const governors = getGovernors();

export const GovernorsHTML = () => {
    let html = `<select id="governors-dropdown"><option value="0">Select a Governor...</option>`;
    const activeGovernors = governors.filter((governor) => governor.isActive);

    for (const governor of activeGovernors) {
        html += `<option value="${governor.id}">${governor.name}</option>`;
    }
    html += `</select>`;

    return html;
};