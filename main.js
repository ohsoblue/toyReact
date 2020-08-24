import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
    render() {
        return <div>
            <h1>My Component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent class="alex" id="alexId">
    <span>abc</span>
    <ul>
        <li>li 1</li>
        <li>li 2</li>
    </ul>
</MyComponent>, document.body)