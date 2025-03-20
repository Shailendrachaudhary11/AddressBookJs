class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Override toString() to display Contact Information
    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, ZIP: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Create an Address Book Array
let addressBook = [
    new AddressBookContact("John", "Doe", "123 Main St", "New York", "NY", "100001", "9876543210", "john.doe@example.com"),
    new AddressBookContact("Alice", "Smith", "456 Park Ave", "Los Angeles", "CA", "900001", "9123456789", "alice.smith@example.com"),
    new AddressBookContact("Robert", "Brown", "789 Elm St", "Chicago", "IL", "600001", "8765432109", "robert.brown@example.com"),
    new AddressBookContact("Emma", "Wilson", "567 Oak Rd", "San Francisco", "CA", "941001", "9234567890", "emma.wilson@example.com"),
    new AddressBookContact("David", "Lee", "890 Pine St", "Houston", "TX", "770001", "9654321876", "david.lee@example.com")
];

// Function to Sort Address Book by City
const sortByCity = (addressBook) => addressBook.sort((a, b) => a.city.localeCompare(b.city));

// Function to Sort Address Book by State
const sortByState = (addressBook) => addressBook.sort((a, b) => a.state.localeCompare(b.state));

// Function to Sort Address Book by Zip Code
const sortByZip = (addressBook) => addressBook.sort((a, b) => a.zip.localeCompare(b.zip));

// Sorting and Displaying Results
console.log("\nSorted by City:");
sortByCity([...addressBook]).forEach(contact => console.log(contact.toString()));

console.log("\nSorted by State:");
sortByState([...addressBook]).forEach(contact => console.log(contact.toString()));

console.log("\nSorted by Zip Code:");
sortByZip([...addressBook]).forEach(contact => console.log(contact.toString()));
