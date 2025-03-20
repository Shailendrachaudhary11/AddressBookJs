class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        // Regex Patterns for Validation
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const addressRegex = /^[a-zA-Z0-9\s]{4,}$/;
        const zipRegex = /^[0-9]{6}$/;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Validating Inputs
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            throw new Error("Invalid Name! Must start with a capital letter and have at least 3 characters.");
        }
        if (!addressRegex.test(address) || !addressRegex.test(city) || !addressRegex.test(state)) {
            throw new Error("Invalid Address, City, or State! Minimum 4 characters required.");
        }
        if (!zipRegex.test(zip)) throw new Error("Invalid ZIP Code! Must be a 6-digit number.");
        if (!phoneRegex.test(phoneNumber)) throw new Error("Invalid Phone Number! Must be 10 digits.");
        if (!emailRegex.test(email)) throw new Error("Invalid Email Format!");

        // Assigning Valid Data
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getDetails() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, ${this.city}, ${this.state}, ZIP: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Address Book Array
let addressBook = [];

// Function to Add Contact (Checking for Duplicate Name)
const addContact = (contact) => {
    if (addressBook.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName)) {
        throw new Error("Duplicate Entry! Contact with this name already exists.");
    }
    addressBook.push(contact);
};

// Function to Count Contacts by City
const countByCity = (city) => {
    return addressBook.reduce((count, contact) => contact.city.toLowerCase() === city.toLowerCase() ? count + 1 : count, 0);
};

// Function to Count Contacts by State
const countByState = (state) => {
    return addressBook.reduce((count, contact) => contact.state.toLowerCase() === state.toLowerCase() ? count + 1 : count, 0);
};

// Example Usage
try {
    const contact1 = new AddressBookContact("John", "Doe", "123 Main St", "New York", "NY", "100001", "9876543210", "john.doe@example.com");
    const contact2 = new AddressBookContact("Alice", "Smith", "456 Park Ave", "Los Angeles", "CA", "900001", "9123456789", "alice.smith@example.com");
    const contact3 = new AddressBookContact("Robert", "Brown", "789 Elm St", "New York", "NY", "100002", "8765432109", "robert.brown@example.com");
    const contact4 = new AddressBookContact("Emma", "Wilson", "567 Oak Rd", "Los Angeles", "CA", "900002", "9234567890", "emma.wilson@example.com");
    const contact5 = new AddressBookContact("David", "Lee", "890 Pine St", "New York", "NY", "100003", "9654321876", "david.lee@example.com");

    // Adding Contacts
    addContact(contact1);
    addContact(contact2);
    addContact(contact3);
    addContact(contact4);
    addContact(contact5);

    console.log("\nTotal Contacts by City:");
    console.log(`New York: ${countByCity("New York")}`);
    console.log(`Los Angeles: ${countByCity("Los Angeles")}`);

    console.log("\nTotal Contacts by State:");
    console.log(`NY (New York): ${countByState("NY")}`);
    console.log(`CA (California): ${countByState("CA")}`);

} catch (error) {
    console.error("Error:", error.message);
}
