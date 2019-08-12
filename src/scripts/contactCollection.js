

const getContactData = () => {
    return fetch("http://127.0.0.1:8080/api/database.json")
    .then(response => response.json());
};
getContactData()

export default contactList  
export default contactForm
