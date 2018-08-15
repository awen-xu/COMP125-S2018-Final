(function () {
    // App variables
    let XHR;
    let hash;
    let addressBook;
    let Contacts;


  /**
   * This function loads a JSON file and dumps it into the addressbook container
   *
   */
  function loadJSON() {
    
    XHR = new XMLHttpRequest();
    XHR.addEventListener("readystatechange", function(){
      if(this.status === 200) {
        if(this.readyState === 4)  {
          addressBook = JSON.parse(this.responseText);
          console.log("Data finished loading");

          createContacts();

          displayData();
        }
      }
    });
    XHR.open("GET", "/data.json");
    XHR.send();
  }


  function createContacts() {
    addressBook.Contacts.forEach(contact => {
      let newContact = new objects.Contact(
        contact.firstName, contact.lastName, contact.contactNumber, contact.emailAddress);
      Contacts.push(newContact);
    });
  }


  function displayData() {

      let tbody = document.querySelector("tbody");
      tbody.innerHTML = "";

      Contacts.forEach(contact => {

        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.textContent = contact.id;
        tr.appendChild(th);

        // loop through each property of the contact object
        // then add the property value to the column
        for (const property in contact) {
          if (contact.hasOwnProperty(property)) {
              /*           
            if(property != "id") {
              let td = document.createElement("td");
              td.textContent = contact[property];
              tr.appendChild(td);
            }*/
            
            let td = document.createElement("td");
            td.textContent = contact[property];
            tr.appendChild(td);
          }
        }
        
          tbody.appendChild(tr);
      });
  
  }


    function Start() {
        console.log(`%c App Started...`, "color:blue; font-size: 30px; font-weight:bold;");
        // Your Code goes here

        Contacts = [];
        loadJSON();

    }

    window.addEventListener("load", Start);
})();