/**
 * File name: contact.js
 * Author's name: Awen Xu
 * Student number: 300992536
 * Assignment: Comp125 Final
 * Date Created: Aug 15, 2018
 * File description: This is the JavaScript file for the contact object. 
 */
let objects;
(function(){
    class Contact {
        // your class definition goes here
        constructor(firstName, lastName, contactNumber, emailAddress){
            this.firstName = firstName;
            this.lastName = lastName;
            this.contactNumber = contactNumber;
            this.emailAddress = emailAddress;
        }
    }

    objects.Contact = Contact;

})(objects || (objects = {}));