const outEl = document.querySelector("#contactForm");
outEl.innerHTML = "<h1>Contacts</h1>";

const contactHtmlRepresentation = contactObj => {
  return `
                <section> 
                <h1>${contactObj.contactName}</h1>
                <p>${contactObj.phoneNumber}</p>
                <p>${contactObj.address}</p>
                </section>    
                `;
};

contact.forEach(contactObj => {
  const contactString = contactHtmlRepresentation(contactObj);
  renderToDom(contactString);
});


export default contactList
