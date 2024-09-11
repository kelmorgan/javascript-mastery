const person = {
    firstName: 'Kufre',
    lastName: 'Udoko',

    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
};


person.fullName = 'Mosh Smith'




console.log(person)


