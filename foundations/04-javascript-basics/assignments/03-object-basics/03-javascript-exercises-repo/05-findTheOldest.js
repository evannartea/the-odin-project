const people1 = [
    {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

const people2 = [
    {
        name: 'Carly',
        yearOfBirth: 1066,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

function findTheOldest(arr) {
    return arr.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();

        if (!person.yearOfDeath) {
            person.yearOfDeath = currentYear;
        }

        if (!oldest.yearOfDeath) {
            oldest.yearOfDeath =  currentYear;
        }

        const currentAge = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        if (currentAge > oldestAge) {
            return person;
        }
        return oldest;
    });
}

console.log(findTheOldest(people1));
console.log(findTheOldest(people2));