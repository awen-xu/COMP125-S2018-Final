/**
 * File name: app.js
 * Author's name: Awen Xu
 * Student number: 300992536
 * Assignment: Comp125 Final
 * Date Created: Aug 15, 2018
 * File description: This is the JavaScript file for all the functions that
 *          make sure the pages load correctly. 
 */
(function () {
    // App variables
    let XHR;
    let addressBook;
    let Contacts;


    /**
     * This function loads a the data.json file
     * and stores the contacts into addressBook
     *
     */
    function loadJSON() {

        XHR = new XMLHttpRequest();
        XHR.addEventListener("readystatechange", function () {
            if (this.status === 200) {
                if (this.readyState === 4) {
                    addressBook = JSON.parse(this.responseText);
                    createContacts();
                    displayData();
                }
            }
        });
        XHR.open("GET", "/data.json");
        XHR.send();
    }



    /**
     * This is the function used to display the contacts
     * in the table in contacts.html
     */
    function displayData() {

        let tbody = document.querySelector("tbody");
        tbody.innerHTML = "";

        Contacts.forEach(contact => {

            let tr = document.createElement("tr");
            let th = document.createElement("th");
            th.setAttribute("scope", "row");

            // adds each property of contacts into the row
            for (const property in contact) {
                if (contact.hasOwnProperty(property)) {
                    let td = document.createElement("td");
                    td.textContent = contact[property];
                    tr.appendChild(td);
                }
            }
            tbody.appendChild(tr);
        });

    }

    
    /**
     * This function adds contacts to Contacts
     */
    function createContacts() {
        addressBook.Contacts.forEach(contact => {
            let newContact = new objects.Contact(
                contact.firstName, contact.lastName, contact.contactNumber, contact.emailAddress);
            Contacts.push(newContact);

        });
    }


    /**
     * This is the start up function.
     */
    function Start() {
        console.log(`%c App Started...`, "color:blue; font-size: 30px; font-weight:bold;");

        Contacts = [];

        if (document.title == "Contacts") {
            loadJSON();
        }

    }

    window.addEventListener("load", Start);
})();