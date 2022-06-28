import { FacilitiesHTML } from "./Facilities.js";
import { MineralsHTML } from "./Minerals.js";
import { GovernorsHTML } from "./Governors.js";
import { CartHTML } from "./Cart.js";
import { ColonyResourcesHTML } from "./ColonyResources.js";

export const RenderHTML = () => {
  return `
    <header class="titleHeader">
      <h1 class="title">Solar System Mining Marketplace</h1>
    </header>
    
    <article class="govColContainer">
        <section class="governorsDropdownContainer">
            <h5>Choose a governor</h5>
            ${GovernorsHTML()}
        </section>
        <section class="colonyMineralsContainer">
            <h5>Colony Minerals</h5>
        </section>
    </article>
    
    <article class="facilitiesDropdownContainer">
        <select name="facility"><option value="0">Choose a facility</option></select>
    </article>
    
    <article class="mineralOptionsContainer"></article>
    
    <article class="cartContainer">
        <h3>Space Cart</h3>
        <section class="itemsInCart">
       
        </section>
        <button id="buyButton">Purchase Mineral</button>
    </article>
    `;
};
