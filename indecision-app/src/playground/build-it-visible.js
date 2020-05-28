class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility() {
        this.setState = (prevState) => {
            return {
                visible: !prevState.visible
            }
        }
    }
    render() {
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visible ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visible ? <p>Here are some details</p> : null }
        </div>
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));