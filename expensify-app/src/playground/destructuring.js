// const person = {
//     name: 'Chuck',
//     age: 26,
//     location: {
//         city: 'Hemet',
//         temp: 90
//     }
// };

// const {name: firstName ='Anonymous', age} = person

// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${state} ${state}`)

const item = ['coffee hot', '2', '2.5', '2.75'];
const [,,medium] = item;
console.log(`medium: ${medium}`)