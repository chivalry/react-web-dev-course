const appRoot = document.getElementById('app');
let visible = false;

const toggle = () => {
    visible = !visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{visible ? 'Hide details' : 'Show details'}</button>
            {visible ? <p>Here are some details</p> : null }
        </div>
    )
    ReactDOM.render(template, appRoot);
}

render();