console.log('app.js is running')

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

var templateTwo = (
    <div>
        <h1>Charles Ross</h1>
        <p>Age: 48</p>
        <p>Location: Hemet, CA</p>
    </div>
);
ReactDOM.render(templateTwo, appRoot);