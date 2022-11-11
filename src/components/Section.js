export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(items) {
        items.forEach(item => {
            this._renderer(item);
        });
    }

    prependItem(domElement) {
        this._container.prepend(domElement);
    }

    appendItem(domElement) {
        this._container.append(domElement);
    }
}