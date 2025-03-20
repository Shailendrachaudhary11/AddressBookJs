class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        // Regex Patterns for Validation
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const addressRegex = /^[a-zA-Z0-9\s]{4,}$/;
        const zipRegex = /^[0-9]{6}$/;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Validating First Name & Last Name
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            throw new Error("Invalid Name! Name should start with a capital letter and have at least 3 characters.");
        }

        // Validating Address, City & State (Minimum 4 Characters)
        if (!addressRegex.test(address) || !addressRegex.test(city) || !addressRegex.test(state)) {
            throw new Error("Invalid Address, City, or State! Each should have at least 4 characters.");
        }

        // Validating ZIP Code
        if (!zipRegex.test(zip)) {
            throw new Error("Invalid ZIP Code! It should be a 6-digit number.");
        }

        // Validating Phone Number
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error("Invalid Phone Number! It should be a 10-digit number.");
        }

        // Validating Email
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email Format!");
        }

        // Assigning Valid Data to Object
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Method to display Contact Details
    getDetails() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, ZIP: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Create an Address Book Array
let addressBook = [];

// Function to Add a New Contact to Address Book
const addContact = (contact) => {
    addressBook.push(contact);
    console.log("Contact added successfully!");
};

// Function to Find a Contact by Name
const findContact = (firstName, lastName) => {
    return addressBook.find(contact => contact.firstName === firstName && contact.lastName === lastName);
};

// Function to Edit an Existing Contact
const editContact = (firstName, lastName, newDetails) => {
    let contact = findContact(firstName, lastName);
    if (contact) {
        // Update the fields only if provided
        contact.address = newDetails.address || contact.address;
        contact.city = newDetails.city || contact.city;
        contact.state = newDetails.state || contact.state;
        contact.zip = newDetails.zip || contact.zip;
        contact.phoneNumber = newDetails.phoneNumber || contact.phoneNumber;
        contact.email = newDetails.email || contact.email;

        console.log(`Contact updated successfully for ${firstName} ${lastName}`);
    } else {
        console.log("Contact not found!");
    }
};

// Example Usage
try {
    const contact1 = new AddressBookContact("John", "Doe", "123 Main St", "New York", "NY", "100001", "9876543210", "john.doe@example.com");
    addContact(contact1);

    const contact2 = new AddressBookContact("Alice", "Smith", "456 Park Ave", "Los Angeles", "CA", "900001", "9123456789", "alice.smith@example.com");
    addContact(contact2);

    console.log("\nAddress Book Contacts:");
    addressBook.forEach(contact => console.log(contact.getDetails()));

    // Edit a Contact
    console.log("\nEditing John's Address...");
    editContact("John", "Doe", { address: "789 Broadway", city: "Boston", state: "MA" });

    console.log("\nUpdated Address Book:");
    addressBook.forEach(contact => console.log(contact.getDetails()));
} catch (error) {
    console.error("Error:", error.message);
}
