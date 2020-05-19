'use strict';

console.log('app.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Charles Ross'
    ),
    React.createElement(
        'p',
        null,
        'Age: 48'
    ),
    React.createElement(
        'p',
        null,
        'Location: Hemet, CA'
    )
);
ReactDOM.render(templateTwo, appRoot);
