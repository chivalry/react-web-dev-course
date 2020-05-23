class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne(this);
        this.handleReset = this.handleReset(this);
        this.state = {
            count: props.count
        };
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount);
        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.com) {
            localStorage.setState('count', this.state.count);
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={handleAddOne.bind(this)}>+1</button>
                <button onClick={handleMinusOne.bind(this)}>-1</button>
                <button onClick={handleReset.bind(this)}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'))