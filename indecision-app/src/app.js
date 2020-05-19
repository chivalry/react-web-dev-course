console.log('app.js is running')

var app = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options: ['One', 'Two']
}
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options ? 'Your options' : 'No options'}</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

var user = {
    name: 'Charles',
    age: 48,
    location: 'Hemet'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
var userName = 'Mike';
var userAge = 12;
var userLocation = 'CA'
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 18) && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
ReactDOM.render(template, appRoot);