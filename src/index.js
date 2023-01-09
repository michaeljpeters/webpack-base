function createComponent() {
    const elem = document.createElement("div");
    elem.innerText = "Hello, Webpack";
    return elem;
}

const elem = createComponent();
document.body.appendChild(elem);
