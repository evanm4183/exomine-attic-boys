import { ColonyResourcesHTML } from "./ColonyResources.js";
import { getCartMineral } from "./database.js"
import { getMinerals } from "./database.js"
import { executePurchase } from "./database.js";
import { getFacilities, getCartFacility } from "./database.js"
import { MineralsHTML } from "./Minerals.js"

document.addEventListener("click", (event) => {
    if (event.target.id == "buyButton") {
        executePurchase();
        document.querySelector('.itemsInCart').innerHTML = ""
        document.querySelector('.mineralOptionsContainer').innerHTML = MineralsHTML(getCartFacility())
        document.querySelector('.colonyMineralsContainer').innerHTML = ColonyResourcesHTML()
    }
});


export const CartHTML = () => {
    if (getCartMineral().id != -1) {
        const currMin = getMinerals().find(x => x.id == getCartMineral())
        if (currMin != undefined) {
            return `<p class="cartmin">1 ton of ${currMin.name ?? ""} from ${getFacilities().find(fac => fac.id == getCartFacility()).name ?? "?"}</p>`;
        }
    }
    return "";
}
