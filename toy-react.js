class ElementWrapper {
    constructor(type){
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(component) {
        this.root.appendChild(component.root);
    }
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
}

export class Component {
    constructor() {
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }

    setAttribute(name, value) {
        this.props[name] = value;
    }

    appendChild(component) {
        this.children.push(component)
    }

    get root() {
        if (!this._root) {
            this._root = this.render().root;
        }
        return this._root;
    }
}

export function render(component, parentElement) {
    parentElement.appendChild(component.root);
}

export function createElement(type, attributes, ...childNodes) {
    let e;
    if (typeof type === 'string') {
        e = new ElementWrapper(type);
    }
    else {
        e = new type;
    }
    for (let p in attributes) {
        e.setAttribute(p, attributes[p]);
    }
    let insertChildren = (children) => {
        for (let n of children) {
            if ('string' === typeof n) {
                n = new TextWrapper(n);
            }
            if (typeof n === 'object' && n instanceof Array) {
                insertChildren(n);
            }
            else {
                e.appendChild(n);
            }
        }
    }
    insertChildren(childNodes);
    return e;
}