import { getCartMineral } from "./database.js"
import { getMinerals } from "./database.js"
import { executePurchase } from "./database.js";

document.addEventListener("click", (event) => {
    if (event.target.id == "buyButton") {
        executePurchase();
    }
});


export const CartHTML = () => {
    if (getCartMineral().id != -1) {
        const currMin = getMinerals().find(x => x.id == getCartMineral().id)
        if (currMin != undefined) {
            return `<p class="cartmin">${currMin.name ?? ""}</p>`;
        }
    }
    return "";
}