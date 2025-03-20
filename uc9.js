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

// Function to Add Contact
const addContact = (contact) => {
    addressBook.push(contact);
};

// Function to View Persons by City
const viewByCity = (city) => {
    let peopleInCity = addressBook.filter(contact => contact.city.toLowerCase() === city.toLowerCase());
    return peopleInCity.map(contact => contact.getDetails()).join("\n");
};

// Function to View Persons by State
const viewByState = (state) => {
    let peopleInState = addressBook.filter(contact => contact.state.toLowerCase() === state.toLowerCase());
    return peopleInState.map(contact => contact.getDetails()).join("\n");
};

// Function to Count People in a City
const countByCity = (city) => {
    return addressBook.reduce((count, contact) => contact.city.toLowerCase() === city.toLowerCase() ? count + 1 : count, 0);
};

// Function to Count People in a State
const countByState = (state) => {
    return addressBook.reduce((count, contact) => contact.state.toLowerCase() === state.toLowerCase() ? count + 1 : count, 0);
};

// Example Usage
try {
    const contact1 = new AddressBookContact("John", "Doe", "123 Main St", "New York", "NY", "100001", "9876543210", "john.doe@example.com");
    const contact2 = new AddressBookContact("Alice", "Smith", "456 Park Ave", "Los Angeles", "CA", "900001", "9123456789", "alice.smith@example.com");
    const contact3 = new AddressBookContact("Robert", "Brown", "789 Elm St", "New York", "NY", "100002", "8765432109", "robert.brown@example.com");
    const contact4 = new AddressBookContact("Emma", "Wilson", "567 Oak Rd", "Los Angeles", "CA", "900002", "9234567890", "emma.wilson@example.com");

    // Adding Contacts to Address Book
    addContact(contact1);
    addContact(contact2);
    addContact(contact3);
    addContact(contact4);

    console.log("\nViewing People in 'New York':");
    console.log(viewByCity("New York"));

    console.log("\nViewing People in 'CA' (California):");
    console.log(viewByState("CA"));

    console.log(`\nTotal People in New York: ${countByCity("New York")}`);
    console.log(`Total People in California: ${countByState("CA")}`);

} catch (error) {
    console.error("Error:", error.message);
}
