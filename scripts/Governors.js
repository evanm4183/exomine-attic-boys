import { getGovernors, setColony } from "./database.js";
import { ColonyResourcesHTML } from "./ColonyResources.js";
import { FacilitiesHTML } from "./Facilities.js";

document.addEventListener("change", event => {
    if (event.target.id === "governors-dropdown" && event.target.value != 0) {
        const governorId = parseInt(event.target.value);
        setColony(governors.find(gov => gov.id === governorId).colonyId);

        const colonyResourcesElement = document.querySelector(".colMin");
        const facilitiesDropdownElement = document.querySelector(".facChoice");

        colonyResourcesElement.innerHTML = ColonyResourcesHTML(); // function name subject to change
        facilitiesDropdownElement.innerHTML = FacilitiesHTML(); // function name subject to change
    }
})

const governors = getGovernors();

export const GovernorsHTML = () => {
    let html = `<select id="governors-dropdown"><option value="0">Select a Governor...</option>`;
    const activeGovernors = governors.filter(governor => governor.isActive);

    for (const governor of activeGovernors) {
        html += `<option value="${governor.id}">${governor.name}</option>`;
    }
    html += `</select>`;

    return html;
}
