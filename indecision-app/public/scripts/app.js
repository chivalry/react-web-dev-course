'use strict';

console.log('app.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

var user = {
    name: 'Charles',
    age: 48,
    location: 'Hemet'
};
var userName = 'Mike';
var userAge = 12;
var userLocation = 'CA';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
ReactDOM.render(template, appRoot);
