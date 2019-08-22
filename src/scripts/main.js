import API from "./data.js";
import render from "./dom.js";
import factoryFuncs from "./factory.js";

const dashboard = document.querySelector("#dashboard");
  dashboard.innerHTML = factoryFuncs.createDOM();
  API.fetchInterests().then(interests => {
    render.renderInterest(interests);
  })

// mark place of interest as Been There
dashboard.addEventListener("click", event => {
  if (event.target.id.startsWith("beenThere")) {
    const interestsContainer = document.querySelector("#interestsContainer");
    const interestId = event.target.id.split("--")[1];
    interestsContainer.innerHTML = "";
    API.deleteInterest(interestId).then(() => {
      API.fetchInterests().then(interests => {
        render.renderInterests(interests);
      });
    });
  }
});

// show dialog box
dashboard.addEventListener("click", event => {
  const showInterestDialog = document.querySelector("#interestsContainer");
  if (event.target.id.startsWith("addInterest")) {
    const interestDialog = document.querySelector("#interestDialog");
    interestDialog.show();
  }
});

// editing/adding with date validation
dashboard.addEventListener("click", event => {
  const saveInterestButton = document.querySelector("#saveInterestButton");
  if (event.target.id.startsWith("saveInterestButton")) {
    const interestNameInput = document.querySelector("#interestNameInput");
    const newInterest = {
      interestName: interestNameInput.value,
      placeId: place.getItem("placeId")
    };
    console.log(newInterest);
    const hiddenField = document.querySelector("#interestId");
    if (hiddenField.value !== "") {
      API.editInterest(hiddenField.value, newInterest).then(() => {
        const interestContainer = document.querySelector("#interestContainer");
        interestContainer.innerHTML = "";
        API.fetchInterests().then(interests => {
          render.renderInterest(interests);
        });
        hiddenField.value = "";
        InterestNameInput.value = "";
        const interestDialog = document.querySelector("#interestDialog");
        interestDialog.close();
        saveButton.innerHTML = "Save";
      });
    } else {
      API.postInterest(newInterest).then(() => {
        const interestContainer = document.querySelector("#interestContainer");
        interestContainer.innerHTML = "";
        API.fetchInterests().then(interests => {
          render.renderInterest(interests);
        });
        interestNameInput.value = "";
        const interestDialog = document.querySelector("#interestDialog");
        interestDialog.close();
        saveInterestButton.innerHTML = "Save";
      });
    }
  }
});

// cancel dialog box
dashboard.addEventListener("click", event => {
  const cancelInterestDialog = document.querySelector(
    "#cancelDialogInterestBox"
  );
  if (event.target.id.startsWith("cancelDialogInterestBox")) {
    const interestDialog = document.querySelector("#interestDialog");
    interestDialog.close();
  }
});

// populate form with previously written interest for editing
const populateDialogToEditInterestName = interestId => {
  const interestNameInput = document.querySelector("#interestNameInput");
  const hiddenField = document.querySelector("#interestId");
  fetch(`http://localhost:8088/interests/${interestId}?_expand=user`)
    .then(data => data.json())
    .then(interest => {
      hiddenField.value = interest.id;
      interestNameInput.value = interest.interestName;
      const interestDialog = document.querySelector("#interestDialog");
      interestDialog.show();
      const saveInterestButton = document.querySelector("#saveInterestButton");
      saveInterestButton.innerHTML += "Edit";
    });
};

//edit

dashboard.addEventListener("click", event => {
  if (event.target.id.startsWith("editInterest")) {
    const interestId = event.target.id.split("--")[1];
    populateDialogToEditInterestName(interestId);
  }
});
