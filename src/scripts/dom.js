import factoryFuncs from "./factory.js";

const render = {
  renderInterests(interestsInDom) {
    const interestInDom = document.querySelector("#interestsContainer");
    interestInDom.innerHTML = "";
    interestsInDom.forEach(interest => {
      const interestRep = factoryFuncs.createInterestHTML(interest);
      interestInDom.innerHTML += interestRep;
    });
  }
};

export default render;
