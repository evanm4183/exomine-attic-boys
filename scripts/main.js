import { RenderHTML } from "./render.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
  mainContainer.innerHTML = RenderHTML()

}

renderAllHTML()