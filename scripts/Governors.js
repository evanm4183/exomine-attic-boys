import { getGovernors, setColony } from "./database.js";
import { ColonyResourcesHTML } from "./ColonyResources.js";
import { FacilitiesHTML } from "./Facilities.js";

document.addEventListener("change", (event) => {
  if (event.target.id === "governors-dropdown" && event.target.value != 0) {
    const governorId = parseInt(event.target.value);
    setColony(governors.find((gov) => gov.id === governorId).colonyId);

    const colonyResourcesElement = document.querySelector(".colonyMineralsContainer");
    const facilitiesDropdownElement = document.querySelector(".facilitiesDropdownContainer");

    colonyResourcesElement.innerHTML = ColonyResourcesHTML();
    facilitiesDropdownElement.innerHTML = FacilitiesHTML();
    document.querySelector(".mineralOptionsContainer").innerHTML = "";
  } else if (event.target.id === "governors-dropdown" && event.target.value == 0) {
    document.querySelector(".facilitiesDropdownContainer").innerHTML = `<select name="facility"><option value="0">Choose a facility</option></select>`;
    document.querySelector(".mineralOptionsContainer").innerHTML = "";
    document.querySelector(".colonyMineralsContainer").innerHTML = "<h5>Colony Minerals</h5>";
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
