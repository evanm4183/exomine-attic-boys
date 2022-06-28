import { getColonyResources, getCartColony, getColonies, getMinerals } from "./database.js";

export const ColonyResourcesHTML = () => {
    const colonyId = getCartColony();
    const minerals = getMinerals();
    const colonies = getColonies()
    const colonyResources = getColonyResources()

    const matchingColonyResources = colonyResources.filter(resource => resource.colonyId === colonyId);
    let html = `<h5>${colonies.find(colony => colony.id === colonyId).name ?? ""} Minerals</h5><ul>`;

    for (const colonyResource of matchingColonyResources) {
        html += `<li>${colonyResource.amountOwned} ton(s) of ${minerals.find(min => min.id === colonyResource.mineralId).name}</li>`;
    }
    html += "</ul>";
    
    return html;
}