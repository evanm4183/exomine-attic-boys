import { FacilitiesHTML } from "./Facilities.js"
import { MineralsHTML } from "./Minerals.js"
import { GovernorsHTML } from "./Governors.js";
import { CartHTML } from "./Cart.js";

export const RenderHTML = () => {
    return `
    <header class="titleHeader">
      <h1 class="title">Solar System Mining Marketplace</h1>
    </header>
    
    <article class="govCol">
        <section class="govChoice">
            <h5>Choose a governor</h5>
            ${GovernorsHTML()}
        </section>
        <section class="colMin">
            <h5>Colony Minerals</h5>
            \${coloniesHtml()}
        </section>
    </article>
    
    <article class="facChoice">
        ${FacilitiesHTML()}
    </article>
    
    <article class="cartFac">
        ${MineralsHTML()}
    </article>
    
    <article class="purchasedMin">
        <h3>Space Cart</h3>
        <section class="itemsInCart">
        ${CartHTML()}
        </section>
        <button id="buyButton">Purchase Mineral</button>
    </article>
    `;
}