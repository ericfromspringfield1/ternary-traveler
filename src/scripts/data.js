const API = {
  fetchInterests() {
    return fetch("http://localhost:8088/interests?_expand=place").then(data =>
      data.json()
    );
  },
  postInterest(newInterest) {
    return fetch("http://localhost:8088/interests?_expand=place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newInterest)
    }).then(data => data.json());
  },
  deleteInterest(interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "DELETE",
    }).then(data => data.json());
  },
  editInterest(InterestId, updatedInterest) {
    return fetch(`http://localhost:8088/interests/${InterestId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedInterest)
    }).then(data => data.json());
  },

  getData(target) {
    return fetch(`http://localhost:8088/${target}`).then(response =>
      response.json()
    );
  },
  getcontentData(target, content) {
    return fetch(`http://localhost:8088/${target}/${content}`).then(response =>
      response.json()
    );
  },
  postNewData(target, content) {
    return fetch(`http://localhost:8088/${target}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    });
  }
};

export default API;
