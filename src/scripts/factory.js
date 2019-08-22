const factoryFuncs = {
  createInterestHTML(interestObj) {
    console.log(createInterestHTML(interestObj));
    return `
      <section>
      <h1 id="interestName">${interestObj.place.name}</h1>
      <p id="placeVisa"> Need Visa? ${interestObj.place.visaRequired}</p>
      <p><button id="editInterest--${interestObj.id}">Edit</button></p>
      <p><button id="beenThere--${interestObj.id}">I've Been There</<button></p>
          </section>`;
  },

  createDOM() {
    return `
        <header>
            <h1>Truthy Travels With Mira</h1>
        </header>
        <section id="placesOfInterest">
            <h1>Places Of Interest</h1>
            <article id="interestsContainer"></article>
            <dialog id="interestDialog">
            <input type="hidden" id="interestId" value="" />
            <section>
            <form action="">
            <label for="">Interest Name</label>
            <input type="text" id="interestNameInput">
            </form>
            <form action="">
            <label for="">Interest Description</label>
            <input type="text" id="interestDescriptionInput">
            <form action="">
            <label for="">Interest Cost</label>
            <input type="text" id="interestCostInput">
            </form>
            <form action="">
            <label for="">Interest Review</label>
            <input type="text" id="interestReviewInput">
            </form>
            <button id="saveInterestButton" class="hideInterest">Save </button>
            <button id="cancelDialogInterestBox" class="cancelInterestDialog">Cancel</button>
            </section>
            </dialog>
            </section>
                <section><button id="addInterest" class="showInterest">Add</button></section>  
                </section>
        `;
  }
};

export default factoryFuncs;
