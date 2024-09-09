
const address = new Address('a', 'b', 'c')


//factory function

console.log(address)


function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}


//Constructor function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}





function showAddress(address) {

    for (key in address)
        console.log(key, address[key]);

}


showAddress(address);