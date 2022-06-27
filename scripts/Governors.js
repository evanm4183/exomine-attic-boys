import { getGovernors } from "./database.js";

const governors = getGovernors();

export const GovernorsHTML = () => {
    let html = `<select class="governors-dropdown"><option value="0">Select a Governor...</option>`;
    const activeGovernors = governors.filter(governor => governor.isActive);


}