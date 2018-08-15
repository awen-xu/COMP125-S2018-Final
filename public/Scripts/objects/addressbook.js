/**
 * File name: contact.js
 * Author's name: Awen Xu
 * Student number: 300992536
 * Assignment: Comp125 Final
 * Date Created: Aug 15, 2018
 * File description: This is the JavaScript file for the addressBook object
 *          and a function to add a new contact. 
 */
(function () {
    class AddressBook {
        constructor() {
            this.Contacts = [];
        }

        /**
         * This function adds new contact to the list of Contacts
         * @param {*} newContact 
         */
        AddContact(newContact) {
            this.Contacts.push(newContact);
        }
    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));