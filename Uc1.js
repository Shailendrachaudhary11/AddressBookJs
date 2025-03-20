class AddressBookContact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        const zipRegex = /^[0-9]{6}$/;
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            throw new Error("Invalid Name! Name should start with a capital letter and have at least 3 characters.");
        }
        if (!zipRegex.test(zip)) {
            throw new Error("Invalid ZIP Code! It should be a 6-digit number.");
        }
        if (!phoneRegex.test(phoneNumber)) {
            throw new Error("Invalid Phone Number! It should be a 10-digit number.");
        }
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email Format!");
        }

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

// Example Usage
try {
    const contact = new AddressBookContact("John", "Doe", "123 Street", "New York", "NY", "100001", "9876543210", "john.doe@example.com");
    console.log(contact.getDetails());
} catch (error) {
    console.error(error.message);
}
