console.log('app.js is running')

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle'
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

var user = {
    name: 'Charles',
    age: 48,
    location: 'Hemet'
}
var userName = 'Mike';
var userAge = 12;
var userLocation = 'CA'
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
ReactDOM.render(template, appRoot);