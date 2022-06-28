import { getColonyResources, getCartColony, getMinerals } from "./database.js";

export const ColonyResourcesHTML = () => {
    const colonyId = getCartColony();
    const minerals = getMinerals();
    const matchingColonies = getColonyResources().filter(col => col.id === colonyId);
    let html = "<ul>";

    for (const colony of matchingColonies) {
        html += `<li>${colony.amountOwned} ton(s) of ${minerals.find(min => min.id === colony.mineralId).name}</li>`;
    }
    html += "</ul>";
    
    return html;
}