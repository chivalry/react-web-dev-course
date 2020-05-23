class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne(this);
        this.handleReset = this.handleReset(this);
    }
    handleAddOne() {
        console.log('add one');
    }
    handleMinusOne() {
        console.log('minus one');
    }
    handleReset() {
        console.log('reset');
    }
    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={handleAddOne.bind(this)}>+1</button>
                <button onClick={handleMinusOne.bind(this)}>-1</button>
                <button onClick={handleReset.bind(this)}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// const appRoot = document.getElementById('app');
// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const someId = 'myidehere';

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);  
// }

// renderCounterApp();