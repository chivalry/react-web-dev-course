console.log('app.js is running')

const app = {
    title: 'Indecision App',
    subtitle: 'Subtitle',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options ? 'Your options' : 'No options'}</p>
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

const user = {
    name: 'Charles',
    age: 48,
    location: 'Hemet'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 18) && <p> Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
ReactDOM.render(template, appRoot);