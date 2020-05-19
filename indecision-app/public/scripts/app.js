'use strict';

console.log('app.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options ? 'Your options' : 'No options'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

var user = {
    name: 'Charles',
    age: 48,
    location: 'Hemet'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var userName = 'Mike';
var userAge = 12;
var userLocation = 'CA';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age > 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age
    ),
    getLocation(user.location)
);
ReactDOM.render(template, appRoot);
