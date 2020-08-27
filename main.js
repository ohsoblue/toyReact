import { createElement, Component, render } from './toy-react'




class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 2
        };
    }



    handleClick() {
        this.setState({
            a: this.state.a + 1
        });
    }

    render() {

        return (
            <div className="game">
                <button onClick={() => this.handleClick()}>button</button>
                <div className="game-board">
                    <span>{this.state.a.toString()}</span>
                    <span>{this.state.b.toString()}</span>
                </div>
            </div>
        );
    }
}

// ========================================

render(<Game />, document.getElementById("root"));
