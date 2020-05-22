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
let count = 0;

const addOne = () => {
    console.log('addOne');
}

const minusOne = () => {
    console.log('minusOne');
}

const reset = () => {
    console.log('reset');
}

const someId = 'myidehere';
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);

ReactDOM.render(templateTwo, appRoot);