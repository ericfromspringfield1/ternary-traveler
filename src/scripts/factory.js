//create HTML Representation in factory.js//

import contact from "./contact"
import main from "./contactForm";

const contactContainer = document.querySelector("#container");

const renderToDom = contactString => {
  contactContainer.innerHTML += contactString;
};
renderToDom()

export default main