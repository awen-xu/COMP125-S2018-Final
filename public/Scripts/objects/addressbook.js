(function(){
    class AddressBook {
        constructor() {
            this.Contacts = [];
        }

        // complete the addressbook class
        
        AddContact(newContact){
            this.Contacts.concat(newContact);
        }
    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));